CREATE TYPE "public"."content_type" AS ENUM('h1', 'h2', 'h3', 'paragraph');--> statement-breakpoint
CREATE TABLE "content_blocks" (
	"id" serial PRIMARY KEY NOT NULL,
	"listing_id" integer NOT NULL,
	"order" integer NOT NULL,
	"type" "content_type" NOT NULL,
	"content" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "content_blocks" ADD CONSTRAINT "content_blocks_listing_id_listings_id_fk" FOREIGN KEY ("listing_id") REFERENCES "public"."listings"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "listings" DROP COLUMN "about_company";