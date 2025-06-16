import { Organization } from "@ophelia/types";

export const getOrganization = async (): Promise<Organization> => {
  return {
    name: "Acme Inc",
  };
};
