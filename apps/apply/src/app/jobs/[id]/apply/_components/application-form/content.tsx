import { Stepper, Step, Button, Icon, Flex } from "@ophelia/ui";
import { useForm } from "./context";
import styles from "./content.module.css";
import { ResumeStep } from "../steps";

const STEP_MAPPER: Record<number, React.ReactElement> = {
  0: <ResumeStep />,
};

export const Content = () => {
  const { step, next, prev } = useForm();

  const StepElement = STEP_MAPPER[step];

  return (
    <>
      <Stepper current={step} className={styles.stepper}>
        <Step>Resume</Step>

        <Step>Details</Step>

        <Step>Questions</Step>
      </Stepper>

      <Flex direction="column" gap={4} fullWidth>
        {StepElement}

        <Flex
          justify="flex-end"
          gap={3}
          fullWidth
          className={styles["button-container"]}
        >
          <Button variant="text" onClick={prev}>
            Back
          </Button>

          <Button onClick={next}>
            Continue
            <Icon name="arrow-right" />
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
