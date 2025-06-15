import { User } from "@ophelia/types";

export const getUser = async (): Promise<User> => {
  return {
    firstName: "Jakub",
    lastName: "Baginski",
  };
};
