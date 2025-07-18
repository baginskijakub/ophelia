import { Listing } from "@ophelia/types";

export type ListingForm = Pick<Listing, "title" | "badges" | "description">
