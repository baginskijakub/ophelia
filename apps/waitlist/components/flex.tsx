import { CSSProperties, ReactNode } from "react";

interface FlexProps {
    children: ReactNode;
    direction?: CSSProperties['flexDirection'];
    justify?: CSSProperties['justifyContent'];
    align?: CSSProperties['alignItems'];
    gap?: CSSProperties['gap'];
    wrap?: CSSProperties['flexWrap'];
    style?: CSSProperties;
    className?: string;
  }
  
  export const Flex: React.FC<FlexProps> = ({
    children,
    direction = 'row',
    justify = 'flex-start',
    align = 'stretch',
    gap = '0',
    wrap = 'nowrap',
    style = {},
    className = '',
  }) => {
    return (
      <div
        className={className}
        style={{
          display: 'flex',
          flexDirection: direction,
          justifyContent: justify,
          alignItems: align,
          gap,
          flexWrap: wrap,
          ...style,
        }}
      >
        {children}
      </div>
    );
  };