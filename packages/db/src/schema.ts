import {
  boolean,
  integer,
  jsonb,
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
    processedAt: timestamp("processed_at", { mode: "date" }),
    requirementsMet: jsonb("requirements_met").$type<string[]>(),
    requirementsNotMet: jsonb("requirements_not_met").$type<string[]>(),
    aiSummary: text("ai_summary"),
    ocrSummary: text("ocr_summary"),
    projects:
      jsonb("projects").$type<
        { name: string; description: string; date?: string; link?: string }[]
      >(),
    workExperience:
      jsonb("work_experience").$type<
        { position: string; description: string; date: string; company: string }[]
      >(),
  },
  (t) => [primaryKey({ columns: [t.email, t.listingId] })],
);
