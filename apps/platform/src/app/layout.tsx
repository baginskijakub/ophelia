import "@ophelia/ui/styles.css";
import "./global.css";
import { AuthKitProvider } from "@workos-inc/authkit-nextjs/components";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export default async function RootLayout(props: Props) {
  const { children } = props;

  return (
    <html lang="en" data-theme="light">
      <body>
        <AuthKitProvider>{children}</AuthKitProvider>
      </body>
    </html>
  );
}
