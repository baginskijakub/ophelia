import { Avatar, Text, Flex, Icon } from "@ophelia/ui";
import styles from "./row.module.css";
import { ListingWithApplications } from "@ophelia/types";

interface Props {
  applicant: ListingWithApplications["applications"][number];
}

export const Row = (props: Props) => {
  const { image, firstName, lastName } = props.applicant;
  const abbreviation = `${firstName[0]}${lastName[0]}`.toUpperCase();

  return <div className={styles.root}>
    <Flex gap={2} align="center" fullWidth>
      <Avatar.Root size="md">
        {image ? (
          <Avatar.Image src={image} alt="User avatar" />
        ) : (
          <Avatar.Fallback>{abbreviation}</Avatar.Fallback>
        )}
      </Avatar.Root>

      <Text role="paragraph" size="md">
        {firstName} {lastName}
      </Text>
    </Flex>
  </div>;
}
