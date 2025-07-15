import {
  WorkOS,
  Organization,
  User,
  OrganizationMembership,
} from "@workos-inc/node";
import { db } from "@ophelia/db";
import {
  organizationsTable,
  usersTable,
  organizationMembershipsTable,
} from "@ophelia/db/src/schema";
import { eq } from "drizzle-orm";

const workos = new WorkOS(process.env.WORKOS_API_KEY);

export const POST = async (request: Request) => {
  try {
    const payload = await request.text();
    const sigHeader = request.headers.get("workos-signature");

    if (!sigHeader) {
      return new Response("Missing signature header", { status: 400 });
    }

    const webhook = await workos.webhooks.constructEvent({
      payload,
      sigHeader,
      secret: process.env.WORKOS_WEBHOOK_SECRET!,
    });

    switch (webhook.event) {
      case "organization.created":
        await handleOrganizationCreated(webhook.data);
        break;

      case "organization.deleted":
        await handleOrganizationDeleted(webhook.data);
        break;

      case "user.created":
        await handleUserCreated(webhook.data);
        break;

      case "user.deleted":
        await handleUserDeleted(webhook.data);
        break;

      case "organization_membership.created":
        await handleOrganizationMembershipCreated(webhook.data);
        break;

      case "organization_membership.deleted":
        await handleOrganizationMembershipDeleted(webhook.data);
        break;

      default:
        console.log(`Unhandled webhook event: ${webhook.event}`);
    }

    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};

async function handleOrganizationCreated(data: Organization) {
  await db
    .insert(organizationsTable)
    .values({
      id: data.id,
      name: data.name,
      // TODO: use firecrawl to get actual branding not some bullshit
      logo: "https://via.placeholder.com/64x64?text=",
      theme: "default" as const,
      mode: "light" as const,
      hue: Math.floor(Math.random() * 360),
      about: `Welcome to ${data.name}`,
      rounding: true,
      font: "Inter",
    })
    .onConflictDoNothing();
}

async function handleOrganizationDeleted(data: Organization) {
  await db.delete(organizationsTable).where(eq(organizationsTable.id, data.id));
}

async function handleUserCreated(data: User) {
  await db
    .insert(usersTable)
    .values({
      id: data.id,
    })
    .onConflictDoNothing();
}

async function handleUserDeleted(data: User) {
  await db.delete(usersTable).where(eq(usersTable.id, data.id));
}

async function handleOrganizationMembershipCreated(
  data: OrganizationMembership,
) {
  await db
    .insert(organizationMembershipsTable)
    .values({
      id: data.id,
      userId: data.userId,
      organizationId: data.organizationId,
      role: data.role.slug,
    })
    .onConflictDoNothing();
}

async function handleOrganizationMembershipDeleted(
  data: OrganizationMembership,
) {
  await db
    .delete(organizationMembershipsTable)
    .where(eq(organizationMembershipsTable.id, data.id));
}
