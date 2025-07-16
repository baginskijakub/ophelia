import { getListing, getOrganization } from "../../../server-actions";
import { PageClient } from "./page.client";
import { ListingContextProvider } from "./context";

export default async function Page() {
  const listing = await getListing();
  const organization = await getOrganization();

  return (
    <ListingContextProvider organization={organization} listing={listing}>
      <PageClient />
    </ListingContextProvider>
  );
}
