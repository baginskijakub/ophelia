import { Organization } from "@ophelia/types";

export const getOrganization = async (): Promise<Organization> => {
  return {
    name: "Acme Inc",
    branding: {
      logo: "https://images2.wagcdn.com/f/frontend/whiteaway/favicon.ico",
      theme: 'default',
      mode: 'light',
      color: {
        hue: 210,
      },
      rounding: true, 
      font: ''
    }
  };
};
