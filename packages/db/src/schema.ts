import {
  boolean,
  integer,
  pgTable,
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
  createdAt: timestamp("created_at", { mode: 'date' }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: 'date' }).notNull().defaultNow()
});

// TODO add applications table
// export const applicationsTable = pgTable("applications", {
//   id: serial("id").primaryKey(),
//   title: text("name").notNull(),
//   age: integer("age").notNull(),
//   email: text("email").notNull().unique(),
// });
