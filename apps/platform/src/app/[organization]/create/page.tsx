import { getOrganization } from "@app/server-actions";
import { PageClient } from "./page.client";
import { ListingFormProvider } from "./_components/listing-form";
import { mapBranding } from "@ophelia/utils";

interface PageProps {
  params: Promise<{
    organization: string;
  }>;
}

export const metadata = {
  title: "Create job posting | Ophelia",
  description: "Create a new job listing for your organization.",
};


export default async function CreateJobPage(props: PageProps) {
  const { params } = props;
  const { organization: orgId } = await params;

  const organization = await getOrganization();
  const cssVars = mapBranding(organization);

  // TODO: stop using hardcoded value
  return (
    <div style={cssVars}>
      <ListingFormProvider orgName={"meta"}>
        <PageClient organization={organization} />
      </ListingFormProvider>
    </div>
  );
}
