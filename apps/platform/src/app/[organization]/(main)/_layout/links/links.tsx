import { Flex, Icon } from "@ophelia/ui";
import { Navlink } from "./navlink";

export const Links = () => {
  return (
    <Flex direction="row" gap={2}>
      <Navlink href="/home">
        <Icon name="home" size="md" color="icon-90" />
        Home
      </Navlink>

      <Navlink href="/jobs">
        <Icon name="job" size="md" color="icon-90" />
        Job
      </Navlink>

      <Navlink href="/candidates">
        <Icon name="users" size="md" color="icon-90" />
        Candidates
      </Navlink>

      <Navlink href="/settings">
        <Icon name="settings" size="md" color="icon-90" />
        Settings
      </Navlink>
    </Flex>
  );
};
