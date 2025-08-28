import { Organization } from "@ophelia/types";
import { db } from "@ophelia/db";
import { notFound } from "next/navigation";
import { cache } from "react";

export const getOrganization = cache(
  async (orgName: string): Promise<Organization> => {
    const { data, error } = await db.organizations.get(orgName);

    if (error || !data) {
      notFound();
    }

    return {
      name: data.name,
      hue: data.hue,
      logo: data.logo,
      rounding: data.rounding,
    };
  },
);
