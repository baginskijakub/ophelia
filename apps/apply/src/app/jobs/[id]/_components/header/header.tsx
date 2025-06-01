import { Flex, Text } from "@ophelia/ui";
import styles from "./header.module.css";
import clsx from "clsx";
import { getListing } from "../../../../../server-actions";

export const Header: React.FC = async () => {
  const { posting } = await getListing();

  return (
    <Flex
      direction="column"
      gap={8}
      className={clsx("unfold", "delay-1", styles.root)}
    >
      <Flex direction="column" gap={2}>
        <Flex align="center" gap={2}>
          <img
            src={posting.company.image.src}
            alt={`Logo of ${posting.company.name}`}
            width={posting.company.image.width}
            height={posting.company.image.height}
            className={styles.image}
          />

          <Text role="label" size="md" color="text-50">
            {posting.company.name}
          </Text>
        </Flex>

        <Text role="display" size="md">
          {posting.title}
        </Text>

        <Flex gap={2}>
          {posting.badges.map((badge) => (
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
