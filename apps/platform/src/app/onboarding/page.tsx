"use client";

import { useEffect, useState } from "react";
import { Initial, Setup, Input, Loading, Success } from "./_components";
import styles from "./page.module.css";
import { AnimatePresence } from "framer-motion";
import { createOrganization } from "@app/server-actions";

const DELAYS = [2.5, 3.5, 3];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= 2) {
      return;
    }

    const delay = DELAYS[step] || 3;

    const timer = setTimeout(() => {
      setStep((prevStep) => prevStep + 1);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [step]);

  const onNext = async (url: string) => {
    setStep((prevStep) => prevStep + 1);

    const orgName = await createOrganization(url);

    if (!orgName) {
      setStep(prevStep => prevStep - 1);
    }

    await new Promise((resolve) => setTimeout(resolve, 2500));

    setStep((prevStep) => prevStep + 1);

    await new Promise((resolve) => setTimeout(resolve, 500));

    window.location.href = `/`;
  };

  return (
    <div className={styles.root}>
      <AnimatePresence mode="wait">
        {step === 0 && <Initial key="initial-step" />}
        {step === 1 && <Setup key="setup-step" />}
        {step === 2 && <Input key="input-step" nextStep={onNext} />}
        {step === 3 && <Loading key="loading-step" />}
        {step === 4 && <Success key="success-step" />}
      </AnimatePresence>
    </div>
  );
}
