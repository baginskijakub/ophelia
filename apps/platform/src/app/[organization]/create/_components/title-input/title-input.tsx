import { useJobPostingForm } from '../job-posting-form';
import styles from './title-input.module.css';

export const TitleInput = () => {
  const { form, setTitle } = useJobPostingForm();
  return (
    <input
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
