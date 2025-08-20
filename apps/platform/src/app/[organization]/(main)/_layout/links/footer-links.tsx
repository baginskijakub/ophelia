import { Flex } from "@ophelia/ui";
import { Navlink } from "./navlink";
import styles from "./links.module.css";

export const FooterLinks = () => {
  return (
    <Flex direction="row" gap={4}>
      <Navlink
        href="mailto:baginskijakub@icloud.com"
        className={styles.linkFooter}
      >
        Contact us
      </Navlink>

      <Navlink
        href="mailto:baginskijakub@icloud.com"
        className={styles.linkFooter}
      >
        Help
      </Navlink>
    </Flex>
  );
};
