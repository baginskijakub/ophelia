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
import { relations } from "drizzle-orm";

export const listingsTable = pgTable("listings", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  badges: text("badges").notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date" }).notNull().defaultNow(),
  orgId: text("org_id")
    .notNull()
    .references(() => organizationsTable.id, {
      onDelete: "cascade",
    }),
});

export const organizationsTable = pgTable("organizations", {
  id: text("id").primaryKey(), // WorkOS organization ID
  name: text("name").notNull(),
  logo: text("logo").notNull(),
  theme: text("theme", { enum: ["default", "pastel", "tech"] })
    .notNull()
    .default("default"),
  mode: text("mode", { enum: ["light", "dark"] })
    .notNull()
    .default("light"),
  hue: integer("hue").notNull(),
  about: text("about").notNull(),
  rounding: boolean("rounding").notNull().default(true),
  font: text("font").notNull().default("Inter"),
  createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date" }).notNull().defaultNow(),
});

export const usersTable = pgTable("users", {
  id: text("id").primaryKey(), // WorkOS user ID
  createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date" }).notNull().defaultNow(),
});

export const organizationMembershipsTable = pgTable(
  "organization_memberships",
  {
    id: text("id").primaryKey(), // WorkOS membership ID
    userId: text("user_id")
      .notNull()
      .references(() => usersTable.id, { onDelete: "cascade" }),
    organizationId: text("organization_id")
      .notNull()
      .references(() => organizationsTable.id, { onDelete: "cascade" }),
    role: text("role"),
    createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "date" }).notNull().defaultNow(),
  },
);

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
    workExperience: jsonb("work_experience").$type<
      {
        position: string;
        description: string;
        date: string;
        company: string;
      }[]
    >(),
  },
  (t) => [primaryKey({ columns: [t.email, t.listingId] })],
);

export const listingRelations = relations(listingsTable, ({ one }) => ({
  organization: one(organizationsTable, {
    fields: [listingsTable.orgId],
    references: [organizationsTable.id],
  }),
}));
