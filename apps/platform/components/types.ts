export type ReactRef<T> = React.Ref<T> | React.RefObject<T>;

export interface PolymorphicProps<T = HTMLElement> {
  asChild?: boolean;
  ref?: ReactRef<T>;
}
