"use server";

import { db } from "@ophelia/db";
import { WorkOS } from "@workos-inc/node";
import { z } from "zod";
import { generateObject } from "ai";
import { google } from "@ai-sdk/google";
import { tryCatch } from "@ophelia/utils";
import { takeWebsiteScreenshot } from "../utils";
import { withAuth } from "@workos-inc/authkit-nextjs";

const brandingSchema = z.object({
  hue: z
    .number()
    .describe(
      "Hue value for the organization's color branding. It should be a number between 0 and 360. This is primary color of company found on their website",
    ),
  name: z
    .string()
    .describe(
      "Name of the company. Shouldn't be very official like 'LLC' or 'Inc.'",
    ),
});

const sysPrompt = `
        Extract the company's branding information using the provided information (website screenshot and url).
        The branding information consists of:
        - Company's primary color (hue)
        - Company's name

        Instructions:
        - Use the website to find the company's primary color and name.
        - Do not use any other sources. Only if you know the company from the URL and cannot find information on the website, you may use your own knowledge.
        - The hue value should be a number between 0 and 360.
        - The name should not include very official terms like 'LLC' or 'Inc.'.
        - The hue value is hue of the primary color that this company uses for their branding.
        `;

export const createOrganization = async (website: string): Promise<boolean> => {
  const authData = await withAuth();

  if (!authData.user) {
    console.error("No authenticated user found.");
    return false;
  }

  if (!website.startsWith("https://")) {
    website = `https://${website}`;
  }

  const url = new URL(website);

  const { data: screenshot, error: browserError } = await tryCatch(
    takeWebsiteScreenshot(url),
  );

  if (browserError) {
    console.error("Error taking website screenshot:", browserError);
    return false;
  }

  const { object: brandingData } = await generateObject({
    model: google("gemini-2.5-flash"),
    schema: brandingSchema,
    messages: [
      {
        role: "system",
        content: sysPrompt,
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `Extract the company's branding information using the url ${url.href} and provided screenshot of the website.`,
          },
          {
            type: "image",
            image: screenshot,
          },
        ],
      },
    ],
  });

  // replace all spaces and dots with dashes and lowercase
  const orgName = brandingData.name.toLowerCase().replace(/[.\s]/g, "-");

  const { error: dbError } = await db.organizations.create({
    name: orgName,
    logo: `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=64`,
    hue: brandingData.hue,
  });

  if (dbError) {
    console.error("Error creating organization in DB:", dbError);
    return false;
  }

  const workos = new WorkOS();
  const { data: workosOrg, error: createOrgWorkosErr } = await tryCatch(
    workos.organizations.createOrganization({
      name: orgName,
      // TODO: in future we can accept domain here to be able to create sso stuff nicely
    }),
  );

  if (createOrgWorkosErr) {
    console.error("Error creating organization in WorkOS:", createOrgWorkosErr);
    return false;
  }

  const { error: addMembershipWorkosErr } = await tryCatch(
    workos.userManagement.createOrganizationMembership({
      organizationId: workosOrg.id,
      userId: authData.user.id,
      roleSlug: "admin",
    }),
  );

  if (addMembershipWorkosErr) {
    console.error(
      "Error adding membership to organization in WorkOS:",
      addMembershipWorkosErr,
    );
    return false;
  }

  return true;
};
