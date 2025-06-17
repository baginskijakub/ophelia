CREATE TABLE "listings" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"company" text NOT NULL,
	"content" text NOT NULL,
	"hue" integer NOT NULL,
	"rounding" boolean DEFAULT true,
	"favicon" text,
	"about_company" text,
	"badges" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
DROP TABLE "posts_table" CASCADE;--> statement-breakpoint
DROP TABLE "users_table" CASCADE;
