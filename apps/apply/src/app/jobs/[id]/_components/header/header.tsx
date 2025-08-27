import { Flex, Text } from "@ophelia/ui";
import styles from "./header.module.css";
import clsx from "clsx";
import { getListing } from "../../../../../server-actions";
import { capitalize } from "@ophelia/utils";

export const Header: React.FC = async () => {
  const { listing, organization } = await getListing();

  return (
    <Flex
      direction="column"
      gap={8}
      className={clsx("unfold", "delay-1", styles.root)}
    >
      <Flex direction="column" gap={2}>
        <Flex align="center" gap={2}>
          <img
            src={organization.logo}
            alt={`Logo of ${organization.name}`}
            width={32}
            height={32}
            className={styles.image}
          />

          <Text role="label" size="md" color="text-50">
            {capitalize(organization.name, true)}
          </Text>
        </Flex>

        <Text role="display" size="md">
          {listing.title}
        </Text>
      </Flex>
    </Flex>
  );
};
