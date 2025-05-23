import { Flex, Text, Link, Icon } from "@ophelia/ui";
import { posting } from "../../../../../utils";
import styles from "./header.module.css";
import Image from "next/image";

export const Header: React.FC = () => {
  return (
    <Flex direction="column" gap={8} className={styles.root}>
      <Link role="paragraph" size="md" href="/essa">
        <Icon name="chevron-left" size="md" />
        All jobs
      </Link>

      <Flex direction="column" gap={2}>
        <Flex align="center" gap={2}>
          <Image
            src={posting.company.image}
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
