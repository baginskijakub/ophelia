import { PropsWithChildren } from "react";

const Layout = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
