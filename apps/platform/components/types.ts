import { AriaRole, CSSProperties } from "react";

export type ReactRef<T> = React.Ref<T> | React.RefObject<T>;

export type DOMAttrs<T = Element & HTMLOrSVGElement> = React.AriaAttributes &
  React.DOMAttributes<T> & {
    [dataAttr: string]: unknown;
    ref?: ReactRef<T>;
    id?: string | undefined;
    role?: AriaRole | undefined;
    tabIndex?: number | undefined;
    style?: CSSProperties | undefined;
    className?: string | undefined;
  };

export type AttributeGetter<T = Element & HTMLOrSVGElement> = (
  props?: Record<string, any>,
) => DOMAttrs<T>;

export interface PolymorphicProps<T = HTMLElement> {
  asChild?: boolean;
  ref?: ReactRef<T>;
}
