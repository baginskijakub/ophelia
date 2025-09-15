export interface PolymorphicProps<E = HTMLElement> {
  ref?: React.Ref<E>;
  as?: React.ElementType;
  asChild?: boolean;
}
