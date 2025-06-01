import { Branding, Posting } from "../../types";

interface ListingResponse {
  id: number;
  createdAt: string;
  title: string;
  company: string;
  favicon: string;
  about_company: string;
  content: string;
  hue: number;
  badges: string;
  rounding: boolean;
}

export const mapResponse = (
  input: ListingResponse
): { branding: Branding; posting: Posting } => {
  return {
    branding: {
      theme: "pastel",
      mode: "light",
      color: {
        hue: input.hue,
      },
      rounding: input.rounding,
      font: "Inter",
    },
    posting: {
      id: input.id,
      title: input.title,
      company: {
        name: input.company,
        image: {
          width: 32,
          height: 32,
          src: input.favicon,
        },
      },
      content: input.content,
      about: input.about_company,
      badges: input.badges.split(","),
    },
  };
};
