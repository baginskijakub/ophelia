import { getOrganization } from "@app/server-actions";
import { PageClient } from "./page.client";
import { JobPostingFormProvider } from "./_components/job-posting-form";
import { mapBranding } from "@ophelia/utils";

export default async function CreateJobPage() {
  const organization = await getOrganization()
  const cssVars = mapBranding(organization.branding)

  return (
    <div style={cssVars}>
      <JobPostingFormProvider>
         <PageClient organization={organization} />
      </JobPostingFormProvider>
    </div>
  );

}
