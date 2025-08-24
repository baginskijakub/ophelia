import styles from "./backlink.module.css";
import { Text, Icon } from "@ophelia/ui";
import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

export const Backlink = (props: PropsWithChildren<LinkProps>) => {
  const { children, ...rest } = props;
  return (
    <Link {...rest} className={styles.backlink}>
      <Icon
        name="chevron-left"
        size="md"
        color="icon-30"
        className={styles.icon}
      />

      <Text role="paragraph" size="md" color="text-30">
        {children}
      </Text>
    </Link>
  );
};
