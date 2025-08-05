"use client";

import { useEffect, useState } from "react";
import { Initial, Setup, Input } from "./_components";
import styles from "./page.module.css";
import { AnimatePresence } from "framer-motion";

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

  return (
    <div className={styles.root}>
      <AnimatePresence mode="wait">
        {step === 0 && <Initial key="initial-step" />}
        {step === 1 && <Setup key="setup-step" />}
        {step === 2 && <Input key="input-step" />}
      </AnimatePresence>
    </div>
  );
}
