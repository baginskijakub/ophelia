import type { Metadata } from "next";
import "@ophelia/ui/styles.css";
import { PropsWithChildren } from "react";
import { DefaultLayout } from "./_layout";
import { mapBranding } from "@ophelia/utils";
import { getNullableListing, getOrganization } from "../server-actions";

export const generateMetadata = async (): Promise<Metadata> => {
  const listing = await getNullableListing();

  if (!listing) return {};

  return {
    title: `Careers | ${listing.company.name}`,
    description: `Apply for jobs at ${listing.company.name}`,
    icons: listing.company.image,
  };
};

export default async function RootLayout(props: PropsWithChildren) {
  const { children } = props;

  const listing = await getNullableListing();
  const organization = await getOrganization(); 

  if (!listing) {
    return (
      <html lang="en">
        <DefaultLayout>{children}</DefaultLayout>
      </html>
    );
  }

  const cssVars = mapBranding(organization);

  return (
    <html lang="en" data-theme='light' style={cssVars}>
      <DefaultLayout>{children}</DefaultLayout>
    </html>
  );
}
