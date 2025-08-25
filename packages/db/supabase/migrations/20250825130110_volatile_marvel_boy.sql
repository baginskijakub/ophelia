-- Step 1: Drop foreign key constraints
ALTER TABLE "listings" DROP CONSTRAINT "listings_org_id_organizations_id_fk";--> statement-breakpoint
ALTER TABLE "organization_memberships" DROP CONSTRAINT "organization_memberships_organization_id_organizations_id_fk";--> statement-breakpoint

-- Step 2: Add temporary org_name columns
ALTER TABLE "listings" ADD COLUMN "org_name" text;--> statement-breakpoint
ALTER TABLE "organization_memberships" ADD COLUMN "organization_name" text;--> statement-breakpoint

-- Step 3: Populate temp columns with organization names based on id lookup
UPDATE "listings"
SET "org_name" = (
  SELECT "name" FROM "organizations"
  WHERE "organizations"."id" = "listings"."org_id"
);--> statement-breakpoint

UPDATE "organization_memberships"
SET "organization_name" = (
  SELECT "name" FROM "organizations"
  WHERE "organizations"."id" = "organization_memberships"."organization_id"
);--> statement-breakpoint

-- Step 4: Drop old FK columns
ALTER TABLE "listings" DROP COLUMN "org_id";--> statement-breakpoint
ALTER TABLE "organization_memberships" DROP COLUMN "organization_id";--> statement-breakpoint

-- Step 6: Set NOT NULL constraints
ALTER TABLE "listings" ALTER COLUMN "org_name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "organization_memberships" ALTER COLUMN "organization_name" SET NOT NULL;--> statement-breakpoint

-- Step 7: Change PK from id to name (drop old PK first)
ALTER TABLE "organizations" DROP CONSTRAINT "organizations_pkey";--> statement-breakpoint
ALTER TABLE "organizations" ADD PRIMARY KEY ("name");--> statement-breakpoint

-- Step 8: Add foreign key constraints with new name-based references
ALTER TABLE "listings" ADD CONSTRAINT "listings_org_name_organizations_name_fk" FOREIGN KEY ("org_name") REFERENCES "public"."organizations"("name") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "organization_memberships" ADD CONSTRAINT "organization_memberships_organization_name_organizations_name_fk" FOREIGN KEY ("organization_name") REFERENCES "public"."organizations"("name") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint

-- Step 9: Drop the old id column
ALTER TABLE "organizations" DROP COLUMN "id";
