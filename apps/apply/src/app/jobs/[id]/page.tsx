import { getListing } from "@app/data";
import { PageClient } from "./page.client";
import { ListingContextProvider } from "./context";

export default async function Page() {
  const { listing, organization } = await getListing();

  return (
    <ListingContextProvider organization={organization} listing={listing}>
      <PageClient />
    </ListingContextProvider>
  );
}
