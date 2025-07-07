import { Pipeline as TPipeline } from '@ophelia/types';
import styles from './pipeline.module.css';
import { Flex, Text } from '@ophelia/ui';
import React from 'react';
import clsx from 'clsx';

interface PipelineProps {
  pipeline: TPipeline
}

export const Pipeline = (props: PipelineProps) => {
  const { pipeline } = props;

  const { all, discarded, ...stages } = pipeline;
  
  const stageEntries = Object.entries(stages);

  return (
    <Flex direction="column" gap={5}>
      <Text role="heading" size="sm" color="text-70">Pipeline</Text>

      <div className={styles.root}>
        <div className={styles.container}>
          <span className={styles.value}>{all}</span> All
        </div>

        <span className={styles.separator} />

        <div className={clsx(styles.container, styles.middleContainer)}>
          {stageEntries.map(([stage, count], idx) => (
            <React.Fragment key={stage}>
              <div className={styles.stage}>
                <span className={styles.value}>{count}</span> {stage.charAt(0).toUpperCase() + stage.slice(1)}
              </div>

              {idx < stageEntries.length-1 && <span className={styles.separator} />}
            </React.Fragment>
          ))
          }
        </div>

        <span className={styles.separator} />

        <div className={styles.container}>
          <span className={styles.value}>{discarded}</span> Discarded
        </div>
      </div>
    </Flex>
  )
}
