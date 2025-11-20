import { cx } from "@platform/utils";
import { HTMLAttributes } from "react";
import React from "react";

interface LoaderProps extends HTMLAttributes<HTMLOrSVGElement> {}

export const Loader = (props: LoaderProps) => {
  const { className, ...rest } = props;
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      className={cx("animate-[spin_1.5s_linear_infinite]", className)}
      {...rest}
    >
      <path
        d="M6 1V3"
        stroke="currentColor"
        opacity="0.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.1001 3.9L9.5501 2.45"
        stroke="currentColor"
        opacity="0.37"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 6H11"
        stroke="currentColor"
        opacity="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.1001 8.10001L9.5501 9.55001"
        stroke="currentColor"
        opacity="0.62"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 9V11"
        stroke="currentColor"
        opacity="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.44995 9.55001L3.89995 8.10001"
        stroke="currentColor"
        opacity="0.87"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 6H3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.44995 2.45L3.89995 3.9"
        stroke="currentColor"
        opacity="0.12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
