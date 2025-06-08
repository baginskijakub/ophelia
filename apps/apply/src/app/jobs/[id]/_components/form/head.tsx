import { Flex, Text } from "@ophelia/ui";
import { useListing } from "../../context";
import styles from "./form.module.css";

export const Head: React.FC = () => {
  const { company, title } = useListing().posting;

  return (
    <Flex direction="column" gap={2} align="center" className={styles.head}>
      <Flex align="center" gap={2}>
        <img
          src={company.image.src}
          alt={`Logo of ${company.name}`}
          width={company.image.width}
          height={company.image.height}
        />

        <Text role="label" size="md" color="text-50">
          {company.name}
        </Text>
      </Flex>

      <Text role="heading" size="lg">
        {title}
      </Text>
    </Flex>
  );
};
