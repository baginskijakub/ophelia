import { getOrganization } from "@app/server-actions";
import { PageClient } from "./page.client";

export default async function CreateJobPage() {
  const organization = await getOrganization()

  return (
    <PageClient organization={organization}/> 
  );

}
