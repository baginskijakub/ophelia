import { Icon, Separator, Text } from '@ophelia/ui';
import styles from './overview.module.css';

export const Overview = () => {
  return (
    <div className={styles.root}>
      <div className={styles.item}>
        <div className={styles['icon-container']}>
          <Icon name="accepting-applications" size="md" color="icon-60" />
        </div>

        <Text role="label" size="md" color="text-70">
          Accepting applications
        </Text>
      </div>

      <Separator orientation='vertical' />

      <div className={styles.item}>
        <div className={styles['icon-container']}>
        32
        </div>

        <Text role="label" size="md" color="text-70">
         Applications received 
        </Text>
      </div>

      <Separator orientation='vertical' />

      <div className={styles.item}>
        <div className={styles['icon-container']}>
         97 
        </div>

        <Text role="label" size="md" color="text-70">
          Page views
        </Text>
      </div>
    </div>
  );
}
