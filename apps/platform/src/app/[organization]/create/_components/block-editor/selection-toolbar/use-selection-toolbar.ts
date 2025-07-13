import { useState, useEffect, useCallback, useRef } from 'react';
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react';

export const useSelectionToolbar = (editorRef: React.RefObject<HTMLDivElement | null>) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'top', // Positions above the selection
    middleware: [offset({ mainAxis: 8 }), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const dismiss = useDismiss(context);
  const { getFloatingProps } = useInteractions([dismiss]);

  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleSelectionChange = useCallback(() => {
    const selection = document.getSelection();
    if (
      !selection ||
      selection.rangeCount === 0 ||
      selection.isCollapsed ||
      !editorRef.current
    ) {
      setIsOpen(false);
      return;
    }

    const range = selection.getRangeAt(0);
    if (!editorRef.current.contains(range.commonAncestorContainer)) {
      return;
    }

    const virtualEl = {
      getBoundingClientRect: () => range.getBoundingClientRect(),
      contextElement: editorRef.current,
    };

    refs.setReference(virtualEl);
    setIsOpen(true);
    context.update();
  }, [context, refs, editorRef]);

  const debouncedHandleSelectionChange = useCallback(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      handleSelectionChange();
    }, 200); // Adjust debounce delay as needed
  }, [handleSelectionChange]);

  useEffect(() => {
    document.addEventListener('selectionchange', debouncedHandleSelectionChange);
    return () =>
      document.removeEventListener('selectionchange', debouncedHandleSelectionChange);
  }, [debouncedHandleSelectionChange]);

  return {
    isOpen,
    floatingRef: refs.setFloating,
    floatingStyles,
    getFloatingProps,
  };
};
