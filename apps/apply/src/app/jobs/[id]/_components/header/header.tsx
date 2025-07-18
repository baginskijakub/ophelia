import { Flex, Text } from "@ophelia/ui";
import styles from "./header.module.css";
import clsx from "clsx";
import { getListing, getOrganization } from "../../../../../server-actions";

export const Header: React.FC = async () => {
  const { title, badges } = await getListing();
  const { logo, name } = await getOrganization();

  return (
    <Flex
      direction="column"
      gap={8}
      className={clsx("unfold", "delay-1", styles.root)}
    >
      <Flex direction="column" gap={2}>
        <Flex align="center" gap={2}>
          <img
            src={logo}
            alt={`Logo of ${name}`}
            width={32}
            height={32}
            className={styles.image}
          />

          <Text role="label" size="md" color="text-50">
            {name}
          </Text>
        </Flex>

        <Text role="display" size="md">
          {title}
        </Text>

        <Flex gap={2}>
          {badges.map((badge) => (
            <span className={styles.badge} key={badge}>
              <Text role="paragraph" size="md" color="text-50">
                {badge}
              </Text>
            </span>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
