ALTER TABLE "applications" ADD COLUMN "strengths" text;--> statement-breakpoint
ALTER TABLE "applications" ADD COLUMN "weaknesses" text;--> statement-breakpoint
ALTER TABLE "applications" ADD COLUMN "insights" text;--> statement-breakpoint
ALTER TABLE "applications" ADD COLUMN "requirements_met" text;--> statement-breakpoint
ALTER TABLE "applications" ADD COLUMN "requirements_not_met" text;--> statement-breakpoint
ALTER TABLE "applications" ADD COLUMN "processed_at" timestamp;