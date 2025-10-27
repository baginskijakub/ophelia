import { ColorRef } from "./colors";

export interface Border {
  width: string;
  color: ColorRef;
}

export interface Outline extends Border {}

export interface Transition {
  duration: string;
  timingFunction: string;
}
