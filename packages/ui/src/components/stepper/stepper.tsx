import { Children, PropsWithChildren } from "react";
import { StepperContextProps, StepperContextProvider } from "./context";
import { StepContextProvider } from "./step/context";
import styles from "./stepper.module.css";

interface StepperProps
  extends PropsWithChildren,
    Omit<StepperContextProps, "stepsCount"> {}

export const Stepper: React.FC<StepperProps> = (props) => {
  const { children, current } = props;

  const childrenArray = Children.toArray(children);

  return (
    <StepperContextProvider current={current} stepsCount={childrenArray.length}>
      <div className={styles.root}>
        {childrenArray.map((child, index) => (
          <StepContextProvider index={index} key={index}>
            {child}
          </StepContextProvider>
        ))}
      </div>
    </StepperContextProvider>
  );
};
