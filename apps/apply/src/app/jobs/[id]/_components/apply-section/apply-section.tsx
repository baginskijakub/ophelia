import { Button, Text, Icon, Link } from "@ophelia/ui";
import styles from "./apply-section.module.css";
import NextLink from "next/link";
import { posting } from "../../../../../utils";

export const ApplySection = () => {
  return (
    <div className={styles.root}>
      <Text role="paragraph" size="lg" color="brand">
        Upload your resume and fill out a short form to apply.
      </Text>

      <NextLink href={`/jobs/${posting.title}/apply`}>
        <Button size="lg" className={styles.button} as="span">
          Apply now
          <Icon name="arrow-right" />
        </Button>
      </NextLink>
    </div>
  );
};
