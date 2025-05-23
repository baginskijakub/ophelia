import type { Metadata } from "next";
import "@ophelia/ui/styles.css";
import { PropsWithChildren } from "react";
import { DefaultLayout } from "./_layout";
import { branding } from "../utils";

export const metadata: Metadata = {
  title: "Ophelia",
  description: "Apply for jobs",
};

interface Props extends PropsWithChildren {}

export default function RootLayout(props: Props) {
  const { children } = props;

  return (
    <html lang="en" data-theme={branding.mode}>
      <DefaultLayout>{children}</DefaultLayout>
    </html>
  );
}
