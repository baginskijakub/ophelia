import crypto from "crypto";

export function generateOrgId(name: string): string {
  // Convert to lowercase and replace spaces with underscores
  const baseId = name
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_]/g, "") // Remove any non-alphanumeric chars except underscores
    .replace(/_+/g, "_") // Replace multiple underscores with single
    .replace(/^_|_$/g, ""); // Remove leading/trailing underscores

  // Generate random suffix for uniqueness
  const randomSuffix = crypto.randomBytes(3).toString("hex");

  return `${baseId}_${randomSuffix}`;
}

