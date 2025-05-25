import { Children, HTMLAttributes, PropsWithChildren } from "react";
import { StepperContextProps, StepperContextProvider } from "./context";
import { StepContextProvider } from "./step/context";
import styles from "./stepper.module.css";
import clsx from "clsx";

interface StepperProps
  extends PropsWithChildren,
    Omit<StepperContextProps, "stepsCount">,
    HTMLAttributes<HTMLDivElement> {}

export const Stepper: React.FC<StepperProps> = (props) => {
  const { children, current, className, ...rest } = props;

  const childrenArray = Children.toArray(children);

  const rootClass = clsx(styles.root, className);

  return (
    <StepperContextProvider current={current} stepsCount={childrenArray.length}>
      <div className={rootClass} {...rest}>
        {childrenArray.map((child, index) => (
          <StepContextProvider index={index} key={index}>
            {child}
          </StepContextProvider>
        ))}
      </div>
    </StepperContextProvider>
  );
};
