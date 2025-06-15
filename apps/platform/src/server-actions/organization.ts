import { Organization } from "@ophelia/types";

export const getOrganization = async (name: string): Promise<Organization> => {
  return {
    name: "Acme Inc",
  };
};
