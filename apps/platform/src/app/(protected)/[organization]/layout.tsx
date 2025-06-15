import { getOrganization } from "@app/server-actions";
import { Sidebar } from "./_components";
import styles from "./layout.module.css";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  params: Promise<{ organization: string }>;
}

export default async function ProtectedLayout(props: Props) {
  const { children, params } = props;
  const { organization: orgName } = await params;

  const organization = await getOrganization(orgName);

  return (
    <div className={styles.root}>
      <Sidebar organization={organization} />

      <div className={styles.content}>{children}</div>
    </div>
  );
}
