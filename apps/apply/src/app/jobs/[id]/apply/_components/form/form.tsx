"use client";

import { Stepper, Step, useStepper, Button } from "@ophelia/ui";

export const Form = () => {
  const { step, increment } = useStepper();

  return (
    <>
      <Stepper current={step}>
        <Step>Resume</Step>

        <Step>Details</Step>

        <Step>Questions</Step>
      </Stepper>

      <Button onClick={increment}>Next</Button>
    </>
  );
};
