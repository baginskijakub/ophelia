'use client'

import { useState } from "react";

export const useStepper = () => {
    const [step, setStep] = useState(0);

    const increment = () => {
        setStep((prev) => prev + 1);
      };
    
      const decrement = () => {
        setStep((prev) => prev - 1);
      };

    return {
        step,
        setStep,
        increment,
        decrement
    }
}