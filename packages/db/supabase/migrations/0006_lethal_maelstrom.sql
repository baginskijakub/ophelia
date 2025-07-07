ALTER TABLE "applications" DROP COLUMN "requirements_met";--> statement-breakpoint
ALTER TABLE "applications" DROP COLUMN "requirements_not_met";--> statement-breakpoint
ALTER TABLE "applications" ADD COLUMN "requirements_met" jsonb;--> statement-breakpoint
ALTER TABLE "applications" ADD COLUMN "requirements_not_met" jsonb;--> statement-breakpoint
ALTER TABLE "applications" ADD COLUMN "ai_summary" text;--> statement-breakpoint
ALTER TABLE "applications" ADD COLUMN "ocr_summary" text;--> statement-breakpoint
ALTER TABLE "applications" ADD COLUMN "projects" jsonb;--> statement-breakpoint
ALTER TABLE "applications" ADD COLUMN "work_experience" jsonb;--> statement-breakpoint
ALTER TABLE "applications" DROP COLUMN "strengths";--> statement-breakpoint
ALTER TABLE "applications" DROP COLUMN "weaknesses";--> statement-breakpoint
ALTER TABLE "applications" DROP COLUMN "insights";
