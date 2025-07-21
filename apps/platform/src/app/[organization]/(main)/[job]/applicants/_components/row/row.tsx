import { Avatar, Flex, Text } from "@ophelia/ui";
import { useApplicant } from "./context";
import styles from "./row.module.css";
import { ApplicantMenu } from "./menu";

export const Row = () => {
  const { application } = useApplicant();
  const { firstName, lastName, image } = application;
  const abbreviation =
    `${firstName?.charAt(0) || ""}${lastName?.charAt(0) || ""}`.toUpperCase();

  return (
    <a className={styles.root}>
      <Flex direction="row" align="center" gap={2}>
        <Avatar.Root size="sm">
          {image ? (
            <Avatar.Image src={image} alt={`${firstName} ${lastName}`} />
          ) : (
            <Avatar.Fallback>{abbreviation}</Avatar.Fallback>
          )}
        </Avatar.Root>

        <Text role="paragraph" size="md">
          {firstName} {lastName}
        </Text>
      </Flex>

      <ApplicantMenu />
    </a>
  );
};
