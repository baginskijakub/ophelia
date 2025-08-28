import { Logo, Text, Flex } from "@ophelia/ui";
import styles from "./page.module.css";
import { Container } from "@components/*";
import { withAuth } from "@workos-inc/authkit-nextjs";
import { redirect } from "next/navigation";
import { db } from "@ophelia/db";

export default async function HomePage() {
  const { user, organizationId: workosId } = await withAuth();

  // If user is signed in and has an organization, redirect to that organization's page
  // else if they are signed in but have no organization, redirect to onboarding
  if (user) {
    if (!workosId) {
      redirect("/onboarding");
    }
    const org = await db.organizations.getByWorkosId(workosId);
    if (org.data) {
      redirect(`/${org.data.name}`);
    }
  }

  return (
    <Container className={styles.root}>
      <div className={styles["left-column"]}>
        <Flex align="center" gap={1}>
          <Logo />
          <Text role="label" size="md" color="text-70">
            Ophelia
          </Text>
        </Flex>

        <Text role="heading" size="xxl">
          Dream teams
          <br />
          start here
        </Text>

        <Text role="paragraph" size="lg" color="text-30">
          Create beautiful job pages, collect quality applications, and manage
          your entire hiring pipeline in one place.
        </Text>
      </div>
    </Container>
  );
}
