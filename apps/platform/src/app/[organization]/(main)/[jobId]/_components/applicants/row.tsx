import { Avatar, Text, Flex } from "@ophelia/ui";
import styles from "./row.module.css";
import { ListingWithApplications } from "@ophelia/types";

interface Props {
  applicant: ListingWithApplications["applications"][number];
  href: string;
}

export const Row = (props: Props) => {
  const { href, applicant } = props;
  const { image, firstName, lastName } = applicant;

  const abbreviation = `${firstName[0]}${lastName[0]}`.toUpperCase();

  return (
    <a href={href} className={styles.root}>
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
    </a>
  );
};
