import type { Metadata } from "next";
import "@ophelia/ui/styles.css";
import { PropsWithChildren } from "react";
import { DefaultLayout } from "./_layout";
import { mapBranding } from "../utils/map-branding";
import { getListing } from "../server-actions";

export const generateMetadata = async (): Promise<Metadata> => {
  const { posting } = await getListing();
  return {
    title: `Careers | ${posting.company.name}`,
    description: `Apply for jobs at ${posting.company.name}`,
    icons: posting.company.image.src,
  };
};

interface Props extends PropsWithChildren {}

export default async function RootLayout(props: Props) {
  const { children } = props;

  const { branding } = await getListing();
  const cssVars = mapBranding(branding);

  return (
    <html lang="en" data-theme={branding.mode} style={cssVars}>
      <DefaultLayout>{children}</DefaultLayout>
    </html>
  );
}
