import { getListing } from "../../../server-actions";
import { PageClient } from "./page.client";
import { ListingContextProvider } from "./context";

export default async function Page() {
  const { branding, posting } = await getListing();

  return (
    <ListingContextProvider branding={branding} posting={posting}>
      <PageClient />
    </ListingContextProvider>
  );
}
