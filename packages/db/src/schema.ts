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

export const listingStatusEnum = pgEnum("listing_status", [
  "accepting-applications",
  "on-hold",
  "closed",
]);

export const listingsTable = pgTable("listings", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  badges: text("badges").notNull(),
  status: listingStatusEnum("status")
    .notNull()
    .default("accepting-applications"),
  pageViews: integer("page_views").notNull().default(0),
  createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date" }).notNull().defaultNow(),
  orgName: text("org_name")
    .notNull()
    .references(() => organizationsTable.name, {
      onDelete: "cascade",
    }),
});

export const organizationsTable = pgTable("organizations", {
  name: text("name").primaryKey(),
  workosId: text("workos_id").unique(),
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
    organizationName: text("organization_name")
      .notNull()
      .references(() => organizationsTable.name, { onDelete: "cascade" }),
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

export const pipelineStatusesTable = pgTable("pipeline_statuses", {
  id: serial("id").primaryKey(),
  listingId: integer("listing_id")
    .notNull()
    .references(() => listingsTable.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  order: integer("order").notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
});

export const applicationsTable = pgTable("applications", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  image: text("image"),
  listingId: integer("listing_id")
    .notNull()
    .references(() => listingsTable.id, { onDelete: "cascade" }),
  resumeFileKey: text("resume_file_key").notNull(),
  pipelineStatusId: integer("pipeline_status_id").references(
    () => pipelineStatusesTable.id,
  ),
  isDiscarded: boolean("is_discarded").notNull().default(false),
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
});

export const listingRelations = relations(listingsTable, ({ one, many }) => ({
  organization: one(organizationsTable, {
    fields: [listingsTable.orgName],
    references: [organizationsTable.name],
  }),
  contentBlocks: many(contentBlocksTable),
  applications: many(applicationsTable),
  pipelineStatuses: many(pipelineStatusesTable),
}));

export const pipelineStatusesRelations = relations(
  pipelineStatusesTable,
  ({ one, many }) => ({
    listing: one(listingsTable, {
      fields: [pipelineStatusesTable.listingId],
      references: [listingsTable.id],
    }),
    applications: many(applicationsTable),
  }),
);

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
    pipelineStatus: one(pipelineStatusesTable, {
      fields: [applicationsTable.pipelineStatusId],
      references: [pipelineStatusesTable.id],
    }),
  }),
);
