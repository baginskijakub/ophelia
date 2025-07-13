import { ContentBlock } from '@ophelia/types';
import styles from './block.module.css';
import { useContentEditor } from './context';
import { useEffect, useRef } from 'react';
import { Icon } from '@ophelia/ui';
import { Toolbar, useToolbar } from './toolbar';
import { useSelectionToolbar, SelectionToolbar } from './selection-toolbar';
import { FloatingPortal } from '@floating-ui/react';
import { ContentEditable } from './content-editable';
import { useBlockNavigation } from './use-block-navigation';

interface BlockProps {
  block: ContentBlock;
  idx: number;
}

export const Block = (props: BlockProps) => {
  const { block, idx } = props;
  const { content } = block;

  const { updateBlock, addBlock, removeBlock, focusedIdx, focus, blocks } =
    useContentEditor();

  const editorRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { isOpen, setIsOpen, floatingRef, floatingStyles, getFloatingProps, getReferenceProps } =
    useToolbar(buttonRef);

  const {
    isOpen: selectionIsOpen,
    floatingRef: selectionFloatingRef,
    floatingStyles: selectionFloatingStyles,
    getFloatingProps: getSelectionFloatingProps,
  } = useSelectionToolbar(editorRef);

  const { focusEditor, handleNavigationKeyDown } = useBlockNavigation(
    editorRef,
    idx,
    blocks.length,
    focus
  );

  const placeholder = idx === 0 ? 'Write an about section' : '';

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== content) {
      editorRef.current.innerHTML = content;
    }
  }, [content]);

  useEffect(() => {
    if (focusedIdx === idx) {
      focusEditor('end');
    }
  }, [focusedIdx, idx, focusEditor]);

  const handleInput = () => {
    if (editorRef.current) {
      updateBlock(idx, { ...block, content: editorRef.current.innerHTML });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      addBlock(idx + 1);
      return;
    }

    const hasContent = editorRef.current?.innerText.trim() !== '';

    if (e.key === 'Backspace' && !hasContent && idx !== 0) {
      console.log('Removing block at index:', idx);
      e.preventDefault();
      removeBlock(idx);
      return;
    }

    handleNavigationKeyDown(e);
  };

  // Formatting functions
  const applyFormat = (command: 'bold' | 'italic' | 'underline') => {
    if (!editorRef.current) return;

    // Save selection
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
    const range = selection.getRangeAt(0);

    // Focus editor and restore selection
    editorRef.current.focus();
    selection.removeAllRanges();
    selection.addRange(range);

    // Apply command
    document.execCommand(command);

    // Update content
    handleInput();
  };

  const applyBold = () => applyFormat('bold');
  const applyItalic = () => applyFormat('italic');
  const applyUnderline = () => applyFormat('underline');

  return (
    <div className={styles.root}>
      <button
        ref={buttonRef}
        {...getReferenceProps()}
        className={styles.iconButton}
      >
        <Icon
          name="elipsis"
          size="md"
          color="icon-30"
          className={styles.icon}
        />
      </button>

      <ContentEditable
        idx={idx}
        ref={editorRef}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        data-placeholder={placeholder}
        block={block}
      />

      {isOpen && (
        <FloatingPortal>
          <Toolbar
            ref={floatingRef}
            style={floatingStyles}
            {...getFloatingProps()}
            block={block}
            idx={idx}
            close={() => setIsOpen(false)}
          />
        </FloatingPortal>
      )}

      {selectionIsOpen && (
        <FloatingPortal>
          <SelectionToolbar
            ref={selectionFloatingRef}
            style={selectionFloatingStyles}
            {...getSelectionFloatingProps()}
            block={block}
            idx={idx}
            applyBold={applyBold}
            applyItalic={applyItalic}
            applyUnderline={applyUnderline}
          />
        </FloatingPortal>
      )}
    </div>
  );
};
