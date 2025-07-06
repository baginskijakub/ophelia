import styles from './job-posting.module.css';
import { Text, Flex, Icon } from '@ophelia/ui';
import { JobPosting as TJobPosting } from '@ophelia/types';
import { getRelativeTime } from '@ophelia/utils';
import Link from 'next/link';

interface JobPostingProps {
  posting: TJobPosting
}

export const JobPosting = (props: JobPostingProps) => {
  const { posting } = props;
  const { title, company, createdAt, applicantsCount } = posting;
  const { name, image } = company;

  return (
    <Link href="/jobs/title" className={styles.root}>
      <Flex fullWidth justify="space-between" align="center">
        <Text role="label" size="xl" color="text-70">{title}</Text>

        <Icon name='chevron-right' size='md' color='icon-60' />
      </Flex>


      <Flex gap={3} align="center">
        <Flex gap={2} align="center">
          <img src={image} className={styles.logo} />

          <Text role="paragraph" size="sm" color="text-30">
            {name}
          </Text>
        </Flex>

        <span className={styles.separator} />

        <Text role="paragraph" size="sm" color="text-30">
          {getRelativeTime(new Date(createdAt), true)}
        </Text>

        <span className={styles.separator} />

        <Text role="paragraph" size="sm" color="text-30">
          {applicantsCount} applied
        </Text>
      </Flex>
    </Link>
  )
}
