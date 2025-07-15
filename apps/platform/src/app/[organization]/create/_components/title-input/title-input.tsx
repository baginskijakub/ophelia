import { useEffect, useRef } from 'react';
import { useJobPostingForm } from '../job-posting-form';
import styles from './title-input.module.css';

export const TitleInput = () => {
  const { form, setTitle } = useJobPostingForm();
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
      onChange={(e) => setTitle(e.target.value)}
    />
  );
}
