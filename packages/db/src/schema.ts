import {
  boolean,
  integer,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const listingsTable = pgTable("listings", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  content: text("content").notNull(),
  hue: integer("hue").notNull(),
  rounding: boolean("rounding").notNull().default(true),
  favicon: text("favicon").notNull(),
  aboutCompany: text("about_company").notNull(),
  badges: text("badges").notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date" }).notNull().defaultNow(),
});

export const applicationsTable = pgTable(
  "applications",
  {
    email: text("email").notNull(),
    firstName: text("first_name").notNull(),
    lastName: text("last_name").notNull(),
    listingId: integer("listing_id")
      .notNull()
      .references(() => listingsTable.id, { onDelete: "cascade" }),
    resumeFileKey: text("resume_file_key").notNull(),
    createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
    // CV Processing fields
    strengths: text("strengths"),
    weaknesses: text("weaknesses"),
    insights: text("insights"),
    requirementsMet: text("requirements_met"),
    requirementsNotMet: text("requirements_not_met"),
    processedAt: timestamp("processed_at", { mode: "date" }),
  },
  (t) => [primaryKey({ columns: [t.email, t.listingId] })],
);
