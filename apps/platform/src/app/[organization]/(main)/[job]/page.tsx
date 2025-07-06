import { Text, Flex, Icon, Tabs } from '@ophelia/ui';
import styles from './page.module.css';
import Link from 'next/link';

export default function JobPage() {
  return (
    <Flex direction='column' gap={6} className={styles.root} fullWidth>
      <Flex direction="column" gap={2}>
        <Link href="/jobs" className={styles.backlink}>
          <Icon name='chevron-left' size='md' color='icon-30' />

          <Text role="paragraph" size="md" color="text-30">
            Job postings
          </Text>
        </Link>

        <Text role="heading" size="lg" color="text-70">
          AI Engineer
        </Text>
      </Flex>

      <Tabs.Root>
        <Tabs.Item active as='a' href='/'>Overview</Tabs.Item>
        <Tabs.Item as='a' href='/'>Applicants</Tabs.Item>
        <Tabs.Item as='a' href='/'>Settings</Tabs.Item>
      </Tabs.Root>
    </Flex>
  )
}
