import "@ophelia/ui/styles.css";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export default async function RootLayout(props: Props) {
  const { children } = props;

  return <html lang="en">{children}</html>;
}
