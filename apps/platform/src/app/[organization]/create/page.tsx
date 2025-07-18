import { getOrganization } from "@app/server-actions";
import { PageClient } from "./page.client";
import { ListingFormProvider} from "./_components/listing-form";
import { mapBranding } from "@ophelia/utils";

export default async function CreateJobPage() {
  const organization = await getOrganization()
  const cssVars = mapBranding(organization)

  return (
    <div style={cssVars}>
      <ListingFormProvider>
        <PageClient organization={organization} />
      </ListingFormProvider>
    </div>
  );

}
