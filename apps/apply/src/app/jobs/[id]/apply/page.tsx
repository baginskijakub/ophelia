import { Flex } from "@ophelia/ui";
import { Header } from "../_components";
import { Form } from "./_components";

export default function Page() {
  return (
    <Flex direction="column" gap={12}>
      <Header />

      <Form />
    </Flex>
  );
}
