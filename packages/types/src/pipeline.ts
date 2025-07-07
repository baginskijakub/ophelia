export type Pipeline = {
  all: number;
  discarded: number;
  [step: string]: number;
}
