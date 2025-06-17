import { Branding, Posting } from "../../types";
import type { ListingDTO  } from "@ophelia/db";

export const mapResponse = (
  input: ListingDTO,
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
      about: input.aboutCompany,
      badges: input.badges.split(","),
    },
  };
};
