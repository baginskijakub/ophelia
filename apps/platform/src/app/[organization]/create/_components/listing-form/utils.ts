import { ListingForm } from "@ophelia/db";
import { Validation } from "@ophelia/types";

export const validateListing = (listing: ListingForm): Validation => {
  if (!listing.title || listing.title.length < 3) {
    return {
      valid: false,
      error: "Title is required to create a job posting.",
    };
  }

  if (!listing.aboutRole) {
    return {
      valid: false,
      error: "About role is required to create a job posting.",
    };
  }

  if (!listing.responsibilities) {
    return {
      valid: false,
      error: "Responsibilities are required to create a job posting.",
    };
  }

  if (!listing.requirements) {
    return {
      valid: false,
      error: "Requirements are required to create a job posting.",
    };
  }

  return { valid: true, error: null };
};
