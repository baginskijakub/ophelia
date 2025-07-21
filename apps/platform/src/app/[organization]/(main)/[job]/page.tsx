import { Text, Flex, Icon, Tabs, Button } from '@ophelia/ui';
import styles from './page.module.css';
import Link from 'next/link';
import { Applicants, Overview, Pipeline } from './_components';
import { getListingWithApplications } from '@app/server-actions';

interface JobPageProps {
  params: Promise<{
    organization: string;
    job: string;
  }>;
}

export default async function JobPage(props: JobPageProps) {
  const { params } = props;
  const { organization, job } = await params;

  const listing = await getListingWithApplications(parseInt(job), organization);

  const { title, applications } = listing;

  const basePath = `/${organization}/${job}`;

  return (
    <Flex direction='column' gap={16} className={styles.root} fullWidth>
      <Flex direction="column" gap={8} fullWidth>
        <Flex fullWidth justify="space-between" align="center">
          <Flex direction="column" gap={2}>
            <Link href={`/${organization}`} className={styles.backlink}>
              <Icon name='chevron-left' size='md' color='icon-30' />
              <Text role="paragraph" size="md" color="text-30">
                Job postings
              </Text>
            </Link>

            <Text role="heading" size="lg" color="text-70">
              {title}
            </Text>
          </Flex>

          <Button variant='surface' size='md'>
            Job page
            <Icon name='external-link' size='md' color='icon-60' />
          </Button>
        </Flex>

        <Tabs.Root>
          <Tabs.Item active as='a' href={basePath}>Overview</Tabs.Item>
          <Tabs.Item as='a' href={`${basePath}/applicants`}>Applicants</Tabs.Item>
          <Tabs.Item as='a' href={`${basePath}/settings`}>Settings</Tabs.Item>
        </Tabs.Root>
      </Flex>

      <Overview listing={listing} />

      <Pipeline pipeline={listing.pipeline} />

      <Applicants applications={applications} />
    </Flex>
  )
}
