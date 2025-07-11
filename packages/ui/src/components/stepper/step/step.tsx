import { HTMLAttributes, PropsWithChildren } from "react";
import { Text } from "../../text";
import styles from "./step.module.css";
import { Indicator } from "./indicator";
import { Flex } from "../../flex";
import { useStepper } from "../context";
import { useStep } from "./context";
import clsx from "clsx";

interface StepProps extends HTMLAttributes<HTMLDivElement> {}

export const Step: React.FC<StepProps> = (props) => {
  const { children, className, ...rest } = props;

  const { index } = useStep();
  const { current, stepsCount } = useStepper();

  const rootClasses = clsx(styles.root, {
    [styles["root-fill"]]: index < stepsCount - 1,
    className,
  });

  const separatorClasses = clsx(styles.separator, {
    [styles["separator-active"]]: current > index,
    [styles["separator-hidden"]]: index + 1 >= stepsCount,
  });

  return (
    <div className={rootClasses} {...rest}>
      <Flex align="center" gap={2}>
        <Indicator />

        <Text role="label" size="md">
          {children}
        </Text>
      </Flex>

      <span className={separatorClasses} />
    </div>
  );
};
