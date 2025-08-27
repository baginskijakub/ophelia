import { Applicants, Overview, Pipeline } from "./_components";
import { getListingWithApplications } from "@app/server-actions";
import { Metadata } from "next";

interface JobPageProps {
  params: Promise<{
    organization: string;
    job: string;
  }>;
}

export const generateMetadata = async (
  props: JobPageProps,
): Promise<Metadata> => {
  const { params } = props;
  const { organization, job } = await params;

  const listing = await getListingWithApplications(parseInt(job), organization);

  return {
    title: `${listing.title} | Ophelia`,
    description: `Job posting for ${listing.title} at ${organization}`,
  };
};

export default async function JobPage(props: JobPageProps) {
  const { params } = props;
  const { organization, job } = await params;

  const listing = await getListingWithApplications(parseInt(job), organization);

  return (
    <>
      <Overview listing={listing} />

      <Pipeline pipeline={listing.pipeline} />

      <Applicants listing={listing} />
    </>
  );
}
