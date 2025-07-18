import { Organization } from "@ophelia/types";

export const getOrganization = async (): Promise<Organization> => {
  return {
    name: "Acme Inc",
    hue: 213,
    logo: "https://images2.wagcdn.com/f/frontend/whiteaway/favicon.ico",
    rounding: true,
  };
};
