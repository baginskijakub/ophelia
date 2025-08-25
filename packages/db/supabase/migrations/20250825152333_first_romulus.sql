CREATE TYPE "public"."listing_status" AS ENUM('accepting-applications', 'on-hold', 'closed');--> statement-breakpoint
CREATE TABLE "pipeline_statuses" (
	"id" serial PRIMARY KEY NOT NULL,
	"listing_id" integer NOT NULL,
	"name" text NOT NULL,
	"order" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "applications" DROP CONSTRAINT "applications_email_listing_id_pk";--> statement-breakpoint
ALTER TABLE "applications" ADD COLUMN "id" serial PRIMARY KEY NOT NULL;--> statement-breakpoint
ALTER TABLE "applications" ADD COLUMN "image" text;--> statement-breakpoint
ALTER TABLE "applications" ADD COLUMN "pipeline_status_id" integer;--> statement-breakpoint
ALTER TABLE "applications" ADD COLUMN "is_discarded" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "status" "listing_status" DEFAULT 'accepting-applications' NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "page_views" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "pipeline_statuses" ADD CONSTRAINT "pipeline_statuses_listing_id_listings_id_fk" FOREIGN KEY ("listing_id") REFERENCES "public"."listings"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "applications" ADD CONSTRAINT "applications_pipeline_status_id_pipeline_statuses_id_fk" FOREIGN KEY ("pipeline_status_id") REFERENCES "public"."pipeline_statuses"("id") ON DELETE no action ON UPDATE no action;
