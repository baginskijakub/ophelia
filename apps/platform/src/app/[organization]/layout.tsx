import { PropsWithChildren } from "react";
import { checkOrgAccess } from "../../server-actions/check-org-access";

interface Props extends PropsWithChildren {
  params: Promise<{ organization: string }>;
}

export default async function OrganizationLayout(props: Props) {
  const { children } = props;
  const { organization } = await props.params;

  // Check if user has access to this organization
  await checkOrgAccess(organization);

  return <>{children}</>;
}
