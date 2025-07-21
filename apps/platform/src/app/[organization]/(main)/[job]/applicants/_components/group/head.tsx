import { Flex, Icon, Text } from "@ophelia/ui";
import styles from "./group.module.css";
import { useGroup } from "./context";
import { motion } from "framer-motion";
import clsx from "clsx";
import { capitalize } from "@ophelia/utils";

interface Props {
  name: string;
  count: number;
  error?: boolean;
}

export const Head = (props: Props) => {
  const { name, count } = props;

  const { open, setOpen } = useGroup();

  const headStyles = clsx(styles.head, open && styles.head);

  return (
    <button className={headStyles} onClick={() => setOpen(!open)}>
      <Flex align="center" gap={2}>
        <Text role="label" size="md" color="text-50" className={styles.pill}>
          {count}
        </Text>

        <Text role="paragraph" size="lg" color="text-70">
          {capitalize(name)}
        </Text>
      </Flex>

      <span onClick={() => setOpen(!open)} className={styles.chevronButton}>
        <motion.div
          className={styles.rotatable}
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.2, damping: 20 }}
        >
          <Icon name="chevron-right" size="md" color="icon-60" />
        </motion.div>
      </span>
    </button>
  );
};
