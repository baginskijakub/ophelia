import pg from "postgres";

export const isUniqueConstraintError = (error: unknown): boolean => {
  return error instanceof pg.PostgresError && error.code === "23505";
};
