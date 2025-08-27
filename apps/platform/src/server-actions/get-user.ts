import { User } from "@ophelia/types";
import { withAuth } from "@workos-inc/authkit-nextjs";
import { notFound } from "next/navigation";

export const getUser = async (): Promise<User> => {
  const { user } = await withAuth();

  if (!user) {
    return notFound();
  }

  const firstName = user.firstName ?? undefined;
  const lastName = user.lastName ?? undefined;
  const email = user.email;

  const image = user.profilePictureUrl ?? undefined;
  const name = (firstName || email.split("@")[0]) ?? "Unknown";
  const abbreviation =
    firstName && lastName
      ? `${firstName[0]}${lastName[0]}`
      : name.slice(0, 2).toUpperCase();

  return {
    name,
    email,
    abbreviation,

    firstName,
    lastName,

    image,
  };
};
