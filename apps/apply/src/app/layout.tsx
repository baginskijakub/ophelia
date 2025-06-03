import type { Metadata } from "next";
import "@ophelia/ui/styles.css";
import { PropsWithChildren } from "react";
import { DefaultLayout } from "./_layout";
import { mapBranding } from "../utils/map-branding";
import { getNullableListing } from "../server-actions";

export const generateMetadata = async (): Promise<Metadata> => {
  const listing = await getNullableListing();

  if (!listing) return {};

  const { posting } = listing;
  return {
    title: `Careers | ${posting.company.name}`,
    description: `Apply for jobs at ${posting.company.name}`,
    icons: posting.company.image.src,
  };
};

interface Props extends PropsWithChildren {}

export default async function RootLayout(props: Props) {
  const { children } = props;

  const listing = await getNullableListing();

  if (!listing) {
    return (
      <html lang="en">
        <DefaultLayout>{children}</DefaultLayout>
      </html>
    );
  }

  const { branding } = listing;

  const cssVars = mapBranding(branding);

  return (
    <html lang="en" data-theme={branding.mode} style={cssVars}>
      <DefaultLayout>{children}</DefaultLayout>
    </html>
  );
}
