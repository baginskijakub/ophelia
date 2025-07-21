ALTER TABLE "listings" DROP CONSTRAINT "listings_org_id_organizations_id_fk";
--> statement-breakpoint
ALTER TABLE "organization_memberships" DROP CONSTRAINT "organization_memberships_organization_id_organizations_id_fk";
--> statement-breakpoint

ALTER TABLE "organizations" DROP CONSTRAINT "organizations_pkey";--> statement-breakpoint
ALTER TABLE "organizations" ADD COLUMN "workos_id" text PRIMARY KEY NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ADD CONSTRAINT "listings_org_id_organizations_workos_id_fk" FOREIGN KEY ("org_id") REFERENCES "public"."organizations"("workos_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "organization_memberships" ADD CONSTRAINT "organization_memberships_organization_id_organizations_workos_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("workos_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "organizations" ADD CONSTRAINT "organizations_id_unique" UNIQUE("id");
