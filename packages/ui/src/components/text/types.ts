type TextRole = 'display' | 'heading' | 'paragraph' | 'label';

type TextSizeMap = {
  display: 'sm' | 'md' | 'lg' | 'xl';
  heading: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  paragraph: 'sm' | 'md' | 'lg' | 'xl';
  label: 'sm' | 'md' | 'lg' | 'xl';
};

type TextBaseProps = {
  as?: React.ElementType;
} & React.HTMLAttributes<HTMLElement>;

export type TextProps =
  | ({ role: 'display'; size: TextSizeMap['display'] } & TextBaseProps)
  | ({ role: 'heading'; size: TextSizeMap['heading'] } & TextBaseProps)
  | ({ role: 'paragraph'; size: TextSizeMap['paragraph'] } & TextBaseProps)
  | ({ role: 'label'; size: TextSizeMap['label'] } & TextBaseProps);

  export type TextColor = 'text-90' | 'text-70' | 'text-50' | 'text-30' | 'brand' | 'brand-contrast'

export const tagMapper = (props: TextProps): React.ElementType  => {
  if (props.as) return props.as;

  switch (props.role) {
    case 'display':
      return 'h1';
    case 'heading':
      return 'h2';
    case 'paragraph':
      return 'p';
    case 'label':
      return 'label';
    default:
      return 'span';
  }
}