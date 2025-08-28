import { Applicants, Overview, Pipeline } from "./_components";
import { getListingWithApplications } from "@app/data";
import { Metadata } from "next";

interface JobPageProps {
  params: Promise<{
    organization: string;
    jobId: string;
  }>;
}

export const generateMetadata = async (
  props: JobPageProps,
): Promise<Metadata> => {
  const { params } = props;
  const { organization, jobId } = await params;

  const listing = await getListingWithApplications(
    parseInt(jobId),
    organization,
  );

  return {
    title: `${listing.title} | Ophelia`,
    description: `Job posting for ${listing.title} at ${organization}`,
  };
};

export default async function JobPage(props: JobPageProps) {
  const { params } = props;
  const { organization, jobId } = await params;

  const listing = await getListingWithApplications(
    parseInt(jobId),
    organization,
  );

  return (
    <>
      <Overview listing={listing} />

      <Pipeline pipeline={listing.pipeline} />

      <Applicants listing={listing} />
    </>
  );
}
