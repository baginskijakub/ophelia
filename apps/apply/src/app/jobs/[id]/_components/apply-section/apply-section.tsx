import { Button, Text, Icon, Link } from "@ophelia/ui";
import styles from "./apply-section.module.css";
import NextLink from "next/link";
import clsx from "clsx";
import { getListing } from "../../../../../server-actions";

export const ApplySection = async () => {
  const { posting } = await getListing();

  return (
    <div className={clsx("unfold", "delay-2", styles.root)}>
      <Text role="paragraph" size="lg" color="brand">
        Upload your resume and fill out a short form to apply.
      </Text>

      <NextLink href={`/jobs/${posting.id}/apply`}>
        <Button size="lg" className={styles.button} as="span">
          Apply now
          <Icon name="arrow-right" />
        </Button>
      </NextLink>
    </div>
  );
};
