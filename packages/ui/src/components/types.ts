import type {
  Attributes,
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  JSX,
  PropsWithoutRef,
} from "react";

type Merge<T, U> = {
  [K in keyof T as K extends keyof U ? never : K]: T[K];
} & U;

export type PropsWithAs<P, T extends ElementType> = P & {
  as?: T;
};

export type PropsWithoutAs<T> = Omit<T, "as">;

export type PolymorphicProps<
  P,
  T extends ElementType,
  S extends keyof JSX.IntrinsicElements = keyof JSX.IntrinsicElements,
> = Merge<
  T extends keyof JSX.IntrinsicElements
    ? PropsWithoutRef<JSX.IntrinsicElements[T]>
    : ComponentPropsWithoutRef<T>,
  T extends S ? PropsWithAs<P, S> : PropsWithAs<P, T>
> &
  Attributes;

export type PolymorphicForwardedRef<C extends ElementType> =
  ComponentPropsWithRef<C>["ref"];
