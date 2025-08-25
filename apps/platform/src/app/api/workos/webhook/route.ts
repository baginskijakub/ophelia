import {
  Organization,
  User,
  OrganizationMembership,
  WorkOS,
} from "@workos-inc/node";
import { db } from "@ophelia/db";
import * as crypto from "crypto";

type ManualOrganizationMembership = Omit<
  OrganizationMembership,
  "userId" | "organizationId"
> & {
  user_id: string;
  organization_id: string;
};

export const POST = async (request: Request) => {
  try {
    const bodyString = await request.text();
    const sigHeader = request.headers.get("workos-signature");

    if (!sigHeader) {
      return new Response("Missing signature header", { status: 400 });
    }

    // Parse the signature header manually
    const sigParts = sigHeader.split(", ");
    if (!sigParts[0] || !sigParts[1]) {
      return new Response("Invalid signature header format", { status: 400 });
    }
    const timestamp = sigParts[0].replace("t=", "");
    const signature = sigParts[1].replace("v1=", "");

    // Calculate the signature manually like WorkOS does
    const unhashedString = `${timestamp}.${bodyString}`;

    const calculatedSignature = crypto
      .createHmac("sha256", process.env.WORKOS_WEBHOOK_SECRET!)
      .update(unhashedString, "utf8")
      .digest("hex");

    if (calculatedSignature !== signature) {
      return new Response("Manual signature verification failed", {
        status: 401,
      });
    }

    const eventData = JSON.parse(bodyString);

    // Process the event directly instead of using WorkOS SDK
    switch (eventData.event) {
      case "organization.created":
        await handleOrganizationCreated(eventData.data);
        break;

      case "organization.deleted":
        await handleOrganizationDeleted(eventData.data);
        break;

      case "user.created":
        await handleUserCreated(eventData.data);
        break;

      case "user.deleted":
        await handleUserDeleted(eventData.data);
        break;

      case "organization_membership.created":
        await handleOrganizationMembershipCreated(eventData.data);
        break;

      case "organization_membership.deleted":
        await handleOrganizationMembershipDeleted(eventData.data);
        break;

      case "organization_membership.updated":
        await handleOrganizationMembershipUpdated(eventData.data);
        break;

      default:
        console.log(`Unhandled webhook event: ${eventData.event}`);
    }

    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};

async function handleOrganizationCreated(data: Organization) {
  await db.organizations.create({
    workosId: data.id,
    name: data.name,
    logo: "https://via.placeholder.com/64x64?text=",
    hue: Math.floor(Math.random() * 360),
    rounding: true,
  });
}

async function handleOrganizationDeleted(data: Organization) {
  await db.organizations.remove(data.id);
}

async function handleUserCreated(data: User) {
  await db.users.create({
    id: data.id,
  });
}

async function handleUserDeleted(data: User) {
  await db.users.remove(data.id);
}

async function handleOrganizationMembershipCreated(
  data: ManualOrganizationMembership,
) {

  // Ensure organization and user exist before creating membership
  await ensureOrganizationExists(data.organization_id);
  await ensureUserExists(data.user_id);

  await db.organizationMemberships.create({
    id: data.id,
    userId: data.user_id,
    workosOrgId: data.organization_id,
    role: data.role.slug,
  });
}

async function handleOrganizationMembershipUpdated(
  data: ManualOrganizationMembership,
) {
  if (data.status == "active") return;

  await db.organizationMemberships.remove(data.id);
}

async function handleOrganizationMembershipDeleted(
  data: ManualOrganizationMembership,
) {
  await db.organizationMemberships.remove(data.id);
}

async function ensureOrganizationExists(workosOrgId: string): Promise<void> {
  const existingOrg = await db.organizations.getByWorkosId(workosOrgId);
  if (existingOrg.data) {
    return;
  }

  try {
    const workos = new WorkOS();
    const workosOrg = await workos.organizations.getOrganization(workosOrgId);

    await db.organizations.updateWorkosId(workosOrg.name, workosOrg.id);
  } catch (error) {
    console.error(`Failed to fetch/create organization ${workosOrgId}:`, error);
    throw error;
  }
}

async function ensureUserExists(userId: string): Promise<void> {
  const existingUser = await db.users.get(userId);
  if (existingUser.data) {
    return;
  }

  try {
    const workos = new WorkOS();
    const workosUser = await workos.userManagement.getUser(userId);

    await db.users.create({
      id: workosUser.id,
    });
  } catch (error) {
    console.error(`Failed to fetch/create user ${userId}:`, error);
    throw error;
  }
}
