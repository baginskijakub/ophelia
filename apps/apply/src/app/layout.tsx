import type { Metadata } from "next";
import "@ophelia/ui/styles.css";
import { PropsWithChildren } from "react";
import { DefaultLayout } from "./_layout";
import { branding, posting } from "../utils";
import { mapBranding } from "../utils/map-branding";

export const generateMetadata = (): Metadata => {
  return {
    title: `Careers | ${posting.company.name}`,
    description: `Apply for jobs at ${posting.company.name}`,
    icons: posting.company.image.src,
  };
};

interface Props extends PropsWithChildren {}

export default function RootLayout(props: Props) {
  const { children } = props;
  const cssVars = mapBranding(branding);

  return (
    <html lang="en" data-theme={branding.mode} style={cssVars}>
      <DefaultLayout>{children}</DefaultLayout>
    </html>
  );
}
