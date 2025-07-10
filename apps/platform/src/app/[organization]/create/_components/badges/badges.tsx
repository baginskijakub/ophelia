import { Flex, Icon } from "@ophelia/ui"
import styles from "./badges.module.css";

export const Badges = () => {
  return (
    <Flex gap={2} align="center">
      <span className={styles.badge}>New</span>

      <span className={styles.badge}>New</span>

      <Icon name="plus" color="icon-30"/>
    </Flex>
  )
}
