import { PropsWithChildren } from "react";
import { Header } from "./_components";
import { Flex } from "@ophelia/ui";

const Layout = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <Flex direction="column" gap={12}>
      <Header />
      {children}
    </Flex>
  );
};

export default Layout;
