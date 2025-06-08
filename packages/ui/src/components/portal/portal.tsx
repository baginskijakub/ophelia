import * as React from "react";
import ReactDOM from "react-dom";

interface PortalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  container?: Element | DocumentFragment | null;
  ref?: React.RefObject<HTMLDivElement | null>;
}

export const Portal: React.FC<PortalProps> = (props) => {
  const { children, container: containerProp, ref, ...restProps } = props;
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const container = containerProp || (mounted ? document.body : null);

  if (!container) {
    return null;
  }

  return ReactDOM.createPortal(
    <div {...restProps} ref={ref}>
      {children}
    </div>,
    container
  );
};
