CREATE TABLE "organizations" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"logo" text NOT NULL,
	"hue" integer NOT NULL,
	"rounding" boolean DEFAULT true NOT NULL,
	"theme" text,
	"mode" text,
	"about" text,
	"font" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text,
	"first_name" text,
	"last_name" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "organization_memberships" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"organization_id" text NOT NULL,
	"role" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "org_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" DROP COLUMN "company";--> statement-breakpoint
ALTER TABLE "listings" DROP COLUMN "hue";--> statement-breakpoint
ALTER TABLE "listings" DROP COLUMN "rounding";--> statement-breakpoint
ALTER TABLE "listings" DROP COLUMN "favicon";--> statement-breakpoint
ALTER TABLE "organization_memberships" ADD CONSTRAINT "organization_memberships_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "organization_memberships" ADD CONSTRAINT "organization_memberships_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "listings" ADD CONSTRAINT "listings_org_id_organizations_id_fk" FOREIGN KEY ("org_id") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE no action;
ALTER TABLE "organizations" DROP COLUMN "theme";--> statement-breakpoint
ALTER TABLE "organizations" DROP COLUMN "mode";--> statement-breakpoint
ALTER TABLE "organizations" DROP COLUMN "about";--> statement-breakpoint
ALTER TABLE "organizations" DROP COLUMN "font";
