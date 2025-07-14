import { getOrganization } from "@app/server-actions";
import { PageClient } from "./page.client";
import { JobPostingFormProvider } from "./_components/job-posting-form";

export default async function CreateJobPage() {
  const organization = await getOrganization()

  return (
    <JobPostingFormProvider>
      <PageClient organization={organization} />
    </JobPostingFormProvider>
  );

}
