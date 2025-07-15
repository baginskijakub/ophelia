ALTER TABLE "organization_memberships" RENAME COLUMN "workos_id" TO "id";--> statement-breakpoint
ALTER TABLE "organization_memberships" DROP CONSTRAINT "organization_memberships_workos_id_unique";--> statement-breakpoint
ALTER TABLE "organizations" DROP CONSTRAINT "organizations_workos_id_unique";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "users_workos_id_unique";--> statement-breakpoint
ALTER TABLE "organization_memberships" DROP CONSTRAINT "organization_memberships_user_id_organization_id_pk";--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "org_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "organizations" ADD COLUMN "logo" text NOT NULL;--> statement-breakpoint
ALTER TABLE "organizations" ADD COLUMN "theme" text DEFAULT 'default' NOT NULL;--> statement-breakpoint
ALTER TABLE "organizations" ADD COLUMN "mode" text DEFAULT 'light' NOT NULL;--> statement-breakpoint
ALTER TABLE "organizations" ADD COLUMN "hue" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "organizations" ADD COLUMN "about" text NOT NULL;--> statement-breakpoint
ALTER TABLE "organizations" ADD COLUMN "rounding" boolean DEFAULT true NOT NULL;--> statement-breakpoint
ALTER TABLE "organizations" ADD COLUMN "font" text DEFAULT 'Inter' NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ADD CONSTRAINT "listings_org_id_organizations_id_fk" FOREIGN KEY ("org_id") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "listings" DROP COLUMN "company";--> statement-breakpoint
ALTER TABLE "listings" DROP COLUMN "hue";--> statement-breakpoint
ALTER TABLE "listings" DROP COLUMN "rounding";--> statement-breakpoint
ALTER TABLE "listings" DROP COLUMN "favicon";--> statement-breakpoint
ALTER TABLE "listings" DROP COLUMN "about_company";--> statement-breakpoint
ALTER TABLE "organizations" DROP COLUMN "workos_id";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "workos_id";