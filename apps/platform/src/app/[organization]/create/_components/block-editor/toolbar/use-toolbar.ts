import { useState, useEffect } from 'react';
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react';

export const useToolbar = (buttonRef: React.RefObject<HTMLElement | null>) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'top-start', 
    middleware: [offset({ mainAxis: 8 }), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  useEffect(() => {
    if (buttonRef.current) {
      refs.setReference(buttonRef.current);
    }
  }, [buttonRef, refs]);

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss]);

  return {
    isOpen,
    setIsOpen,
    floatingRef: refs.setFloating,
    floatingStyles,
    getFloatingProps,
    getReferenceProps,
  };
};
