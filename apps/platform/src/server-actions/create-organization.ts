import { db } from "@ophelia/db";
import { WorkOS } from "@workos-inc/node";
import { generateOrgId } from "../utils";
import { z } from "zod";
import { generateObject } from "ai";
import { google } from "@ai-sdk/google";
import { tryCatch } from "@ophelia/utils";
import { takeWebsiteScreenshot } from "../utils/take-website-screenshot";

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

// TODO: figure out proper error handling and logging
// TODO: check if the db and workos part works
export const createOrganization = async (website: string): Promise<boolean> => {
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

  console.log("Branding data extracted:", brandingData);

  const { error: dbError } = await db.organizations.create({
    id: generateOrgId(brandingData.name),
    name: brandingData.name,
    logo: `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=64`,
    hue: brandingData.hue,
  });

  if (dbError) {
    return false;
  }

  const workos = new WorkOS();
  await workos.organizations.createOrganization({
    name: brandingData.name,
    // TODO: in future we can accept domain here to be able to create sso stuff nicely
  });

  return true;
};
