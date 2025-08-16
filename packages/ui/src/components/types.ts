import React from "react";

export type PropsOf<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T>;

export interface PolymorphicProps<T = HTMLElement> {
  as?: React.ElementType;

  asChild?: boolean;

  ref?: React.Ref<T>;
}

export type PolymorphicComponentProps<
  TElementType extends React.ElementType,
  TBaseProps = {},
> = TBaseProps &
  PolymorphicProps<
    TElementType extends HTMLElement ? TElementType : HTMLElement
  > &
  Omit<
    PropsOf<TElementType>,
    keyof TBaseProps | keyof PolymorphicProps | "children"
  >;

export type PolymorphicComponent<TBaseProps = {}> = <
  TElementType extends React.ElementType = "div",
>(
  props: PolymorphicComponentProps<TElementType, TBaseProps>,
) => React.ReactElement | null;
