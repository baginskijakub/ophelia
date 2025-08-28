import { Pipeline as TPipeline } from "@ophelia/types";
import styles from "./pipeline.module.css";
import { Flex, Text } from "@ophelia/ui";
import React from "react";
import clsx from "clsx";

interface PipelineProps {
  pipeline: TPipeline;
}

export const Pipeline = (props: PipelineProps) => {
  const { pipeline } = props;
  const { steps, all, discarded } = pipeline;

  return (
    <Flex direction="column" gap={5}>
      <Text role="heading" size="xs" color="text-70">
        Pipeline
      </Text>

      <div className={styles.root}>
        <div className={styles.container}>
          <span className={styles.value}>{all}</span> All
        </div>

        <span className={styles.separator} />

        <div className={clsx(styles.container, styles.middleContainer)}>
          {steps.map((step, idx) => (
            <React.Fragment key={step.order}>
              <div className={styles.stage}>
                <span className={styles.value}>{step.count}</span> {step.name}
              </div>

              {idx < steps.length - 1 && <span className={styles.separator} />}
            </React.Fragment>
          ))}
        </div>

        <span className={styles.separator} />

        <div className={styles.container}>
          <span className={styles.value}>{discarded}</span> Discarded
        </div>
      </div>
    </Flex>
  );
};
