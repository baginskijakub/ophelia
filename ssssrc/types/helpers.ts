import { SemanticRef } from "./colors";

export interface Border {
  width: string;
  color: SemanticRef;
}

export interface Outline extends Border {}

export interface Transition {
  duration: string;
  timingFunction: string;
}
