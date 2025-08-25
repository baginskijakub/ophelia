import {
  boolean,
  integer,
  jsonb,
  pgEnum,
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
  id: text("id").primaryKey(),
  workosId: text("workos_id").unique(),
  name: text("name").notNull(),
  logo: text("logo").notNull(),
  hue: integer("hue").notNull(),
  rounding: boolean("rounding").notNull().default(true),
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

export const contentTypeEnum = pgEnum("content_type", [
  "h1",
  "h2",
  "h3",
  "paragraph",
]);

export const contentBlocksTable = pgTable("content_blocks", {
  id: serial("id").primaryKey(),
  listingId: integer("listing_id")
    .notNull()
    .references(() => listingsTable.id, { onDelete: "cascade" }),
  order: integer("order").notNull(),
  type: contentTypeEnum("type").notNull(),
  content: text("content").notNull(),
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

export const listingRelations = relations(listingsTable, ({ one, many }) => ({
  organization: one(organizationsTable, {
    fields: [listingsTable.orgId],
    references: [organizationsTable.id],
  }),
  contentBlocks: many(contentBlocksTable),
  applications: many(applicationsTable),
}));

export const contentBlocksRelations = relations(
  contentBlocksTable,
  ({ one }) => ({
    listing: one(listingsTable, {
      fields: [contentBlocksTable.listingId],
      references: [listingsTable.id],
    }),
  }),
);

export const applicationsRelations = relations(
  applicationsTable,
  ({ one }) => ({
    listing: one(listingsTable, {
      fields: [applicationsTable.listingId],
      references: [listingsTable.id],
    }),
  }),
);
