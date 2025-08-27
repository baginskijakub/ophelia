import type { Metadata } from "next";
import "@ophelia/ui/styles.css";
import { PropsWithChildren } from "react";
import { DefaultLayout } from "./_layout";
import { mapBranding } from "@ophelia/utils";
import { getNullableListing } from "../server-actions";

export const generateMetadata = async (): Promise<Metadata> => {
  const result = await getNullableListing();

  if (!result) return {};

  return {
    title: `Careers | ${result.listing.company.name}`,
    description: `Apply for jobs at ${result.listing.company.name}`,
    icons: result.listing.company.image,
  };
};

export default async function RootLayout(props: PropsWithChildren) {
  const { children } = props;

  const result = await getNullableListing();

  if (!result) {
    return (
      <html lang="en">
        <DefaultLayout>{children}</DefaultLayout>
      </html>
    );
  }

  const cssVars = mapBranding(result.organization);

  return (
    <html lang="en" data-theme="light" style={cssVars}>
      <DefaultLayout>{children}</DefaultLayout>
    </html>
  );
}
