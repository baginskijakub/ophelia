export type PipelineStep = {
  order: number;
  name: string;
  count: number;
};

export type Pipeline = {
  all: number;
  discarded: number;
  steps: PipelineStep[];
};
