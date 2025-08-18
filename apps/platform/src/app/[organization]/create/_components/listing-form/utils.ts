import { ListingForm } from "@ophelia/db";
import { Validation } from "@ophelia/types";

export const validateListing = (listing: ListingForm): Validation => {
  if (!listing.title || listing.title.length < 3) {
    return {
      valid: false,
      error: "Title is required to create a job posting.",
    };
  }

  if (!Array.isArray(listing.description) || listing.description.length === 0) {
    return { valid: false, error: "Description cannot be empty." };
  }

  return { valid: true, error: null };
};
