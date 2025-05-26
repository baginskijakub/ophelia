import { Stepper, Step, Button, Icon, Flex } from "@ophelia/ui";
import { useForm } from "./context";
import styles from "./content.module.css";
import { ResumeStep } from "../steps";

const STEP_MAPPER: Record<number, React.ReactElement> = {
  0: <ResumeStep />,
};

export const Content = () => {
  const { step, next } = useForm();

  const StepElement = STEP_MAPPER[step];

  return (
    <Flex direction="column" gap={5}>
      <Stepper current={step} className={styles.stepper}>
        <Step>Resume</Step>

        <Step>Details</Step>

        <Step>Questions</Step>
      </Stepper>

      {StepElement}

      <Button
        size="md"
        variant="solid"
        className={styles.button}
        onClick={next}
      >
        Continue
        <Icon name="arrow-right" size="md" />
      </Button>
    </Flex>
  );
};
