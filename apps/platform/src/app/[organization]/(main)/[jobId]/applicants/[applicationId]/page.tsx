import { getApplication } from "../../../../../../data/get-application";
import { Content } from "./_components";

interface PageProps {
  params: Promise<{
    organization: string;
    jobId: string;
    applicationId: string;
  }>;
}

export default async function Page(props: PageProps) {
  const { organization, jobId, applicationId } = await props.params;

  const application = await getApplication(
    parseInt(applicationId),
    parseInt(jobId),
    organization,
  );

  return (
    <div>
      <Content application={application} />
    </div>
  );
}
