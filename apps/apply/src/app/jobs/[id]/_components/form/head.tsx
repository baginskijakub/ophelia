import { Flex, Text } from "@ophelia/ui";
import { useListing } from "../../context";
import styles from "./form.module.css";

export const Head: React.FC = () => {
  const { organization, listing } = useListing();
  const { logo, name } = organization;
  const { title } = listing;

  return (
    <Flex direction="column" gap={2} align="center" className={styles.head}>
      <Flex align="center" gap={2}>
        <img
          src={logo}
          alt={`Logo of ${name}`}
          width={32}
          height={32}
        />

        <Text role="label" size="md" color="text-50">
          {name}
        </Text>
      </Flex>

      <Text role="heading" size="lg">
        {title}
      </Text>
    </Flex>
  );
};
