import { useEffect, useRef } from "react";
import { useListingForm } from "../listing-form";
import styles from "./title-input.module.css";

export const TitleInput = () => {
  const { form, setField } = useListingForm();
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <input
      ref={ref}
      type="text"
      id="title"
      name="title"
      className={styles.input}
      placeholder="Job title"
      value={form.title}
      onChange={(e) => setField("title", e.target.value)}
    />
  );
};
