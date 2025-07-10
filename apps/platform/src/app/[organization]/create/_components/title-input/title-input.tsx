import styles from './title-input.module.css';

export const TitleInput = () => {
  return (
    <input
      type="text"
      id="title"
      name="title"
      className={styles.input}
      placeholder="Job title"
    />
  );
}
