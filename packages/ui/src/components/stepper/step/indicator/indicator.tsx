import { Text } from "../../../text";
import { Icon } from "../../../icon";
import { useStepper } from "../../context";
import { useStep } from "../context";
import styles from "./indicator.module.css";
import clsx from "clsx";

export const Indicator: React.FC = () => {
  const { index } = useStep();
  const { current } = useStepper();

  const indicatorClassNames = clsx(
    styles.indicator,
    {
      [styles["indicator-active"]]: index <= current,
    },
    {
      [styles["indicator-idle"]]: index > current,
    }
  );

  if (index < current) {
    return (
      <span className={indicatorClassNames}>
        <Icon name="check" size="sm" />
      </span>
    );
  }

  return (
    <span className={indicatorClassNames}>
      <Text role="paragraph" size="sm">
        {index + 1}
      </Text>
    </span>
  );
};
