import { Branding, Posting } from "../../types";
import type { ListingDTO } from "@ophelia/db";

export const mapResponse = (
  input: ListingDTO,
): { branding: Branding; posting: Posting } => {
  return {
    branding: {
      theme: "pastel",
      mode: "light",
      color: {
        hue: input.organization.hue,
      },
      rounding: input.organization.rounding,
      font: "Inter",
    },
    posting: {
      id: input.id,
      title: input.title,
      company: {
        name: input.organization.name,
        image: {
          width: 32,
          height: 32,
          src: input.organization.logo,
        },
      },
      content: input.content,
      about: input.organization.about,
      badges: input.badges.split(","),
    },
  };
};
