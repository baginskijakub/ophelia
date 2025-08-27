CREATE TYPE "public"."employment_type" AS ENUM('Full-time', 'Part-time', 'Contract', 'Internship', 'Temporary');--> statement-breakpoint
CREATE TYPE "public"."salary_period" AS ENUM('hourly', 'daily', 'weekly', 'monthly', 'yearly');--> statement-breakpoint
DROP TABLE "content_blocks" CASCADE;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "about_company" text;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "about_role" text NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "responsibilities" text NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "requirements" text NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "outro" text;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "min_salary" integer;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "max_salary" integer;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "salary_period" "salary_period";--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "currency" text;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "employment_type" "employment_type" NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" DROP COLUMN "badges";--> statement-breakpoint
DROP TYPE "public"."content_type";