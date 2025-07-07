import { Icon, Separator, Text } from '@ophelia/ui';
import styles from './overview.module.css';
import { JobPosting } from '@ophelia/types';

interface OverviewProps {
  jobPosting: JobPosting
}

export const Overview = (props: OverviewProps) => {
  const { applicantsCount, pageViews} = props.jobPosting;
  
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
          {applicantsCount} 
        </div>

        <Text role="label" size="md" color="text-70">
          Applications received
        </Text>
      </div>

      <Separator orientation='vertical' />

      <div className={styles.item}>
        <div className={styles['icon-container']}>
        {pageViews} 
        </div>

        <Text role="label" size="md" color="text-70">
          Page views
        </Text>
      </div>
    </div>
  );
}
