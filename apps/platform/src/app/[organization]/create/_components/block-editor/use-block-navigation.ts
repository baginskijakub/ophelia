import { useCallback } from 'react';
import { focusEditorByIdx } from './utils';

export const useBlockNavigation = (
  editorRef: React.RefObject<HTMLDivElement | null>,
  idx: number,
  blocksLength: number,
  setFocus: (newIdx: number) => void
) => {
  const focusEditor = useCallback(
    (position: 'start' | 'end' = 'end') => {
      if (!editorRef.current) return;

      editorRef.current.focus();

      const range = document.createRange();
      range.selectNodeContents(editorRef.current);
      range.collapse(position === 'end' ? false : true);

      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
    },
    [editorRef]
  );

  const handleNavigationKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;

      const selection = window.getSelection();
      if (
        !selection ||
        !selection.rangeCount ||
        !editorRef.current ||
        !selection.isCollapsed
      ) {
        return;
      }

      const range = selection.getRangeAt(0).cloneRange();

      // Insert temp span to get cursor rect
      const tempSpan = document.createElement('span');
      range.insertNode(tempSpan);
      const cursorRect = tempSpan.getBoundingClientRect();
      const editorRect = editorRef.current.getBoundingClientRect();
      tempSpan.parentNode?.removeChild(tempSpan);

      // Restore selection
      selection.removeAllRanges();
      selection.addRange(range);

      const threshold = 5; // Adjust for styling quirks

      if (
        e.key === 'ArrowUp' &&
        idx > 0 &&
        cursorRect.top <= editorRect.top + threshold
      ) {
        e.preventDefault();
        setFocus(idx - 1);
        // Cursor at end via focusEditor in target block's useEffect
      } else if (
        e.key === 'ArrowDown' &&
        idx < blocksLength - 1 &&
        cursorRect.bottom >= editorRect.bottom - threshold
      ) {
        e.preventDefault();
        setFocus(idx + 1);
        // Override to place at start
        setTimeout(() => {
          focusEditorByIdx(idx + 1, 'start');
        }, 0);
      }
    },
    [editorRef, idx, blocksLength, setFocus]
  );

  return { focusEditor, handleNavigationKeyDown };
};
