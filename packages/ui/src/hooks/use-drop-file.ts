'use client'

import { useState, useEffect, useCallback, RefObject } from 'react';

interface UseDropFileProps {
    targetRef: RefObject<HTMLElement | null>;
    onDrop: (file: File) => void; 
}

interface UseDropFileReturn {
    isDraggingOver: boolean;
}

export const useDropFile = (props: UseDropFileProps): UseDropFileReturn => {
  const { targetRef, onDrop } = props;
  const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);

  const handleDragEnter = useCallback((event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    
    if (
      event.dataTransfer?.types &&
      event.dataTransfer.types.includes('Files')
    ) {
      setIsDraggingOver(true);
    }
  }, []);

  const handleDragLeave = useCallback((event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const currentTarget = event.currentTarget as HTMLElement;
    const relatedTarget = event.relatedTarget;

    if (relatedTarget instanceof Node) {
      if (!currentTarget.contains(relatedTarget)) {
        setIsDraggingOver(false);
      }
    } else {
      setIsDraggingOver(false);
    }
  }, []);

  const handleDragOver = useCallback((event: DragEvent) => {
    event.preventDefault(); 
    event.stopPropagation();

    if (
      event.dataTransfer?.types &&
      event.dataTransfer.types.includes('Files')
    ) {
      if (!isDraggingOver) {
        setIsDraggingOver(true);
      }
    }
  }, [isDraggingOver]); 

  const handleDrop = useCallback(
    (event: DragEvent) => {
      event.preventDefault();
      event.stopPropagation();

      setIsDraggingOver(false);

      if (event.dataTransfer?.files && event.dataTransfer.files[0]) {
        const file = event.dataTransfer.files[0];
        onDrop(file); 
      }
    },
    [onDrop],
  );

  useEffect(() => {
    const element = targetRef.current;
    if (!element) {
      return;
    }

    const dragEnterListener = handleDragEnter as EventListener;
    const dragLeaveListener = handleDragLeave as EventListener;
    const dragOverListener = handleDragOver as EventListener;
    const dropListener = handleDrop as EventListener;

    element.addEventListener('dragenter', dragEnterListener);
    element.addEventListener('dragleave', dragLeaveListener);
    element.addEventListener('dragover', dragOverListener);
    element.addEventListener('drop', dropListener);

    return () => {
      element.removeEventListener('dragenter', dragEnterListener);
      element.removeEventListener('dragleave', dragLeaveListener);
      element.removeEventListener('dragover', dragOverListener);
      element.removeEventListener('drop', dropListener);
    };
  }, [targetRef, handleDragEnter, handleDragLeave, handleDragOver, handleDrop]);

  return { isDraggingOver };
};