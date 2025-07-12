import { ContentBlock } from '@ophelia/types';
import styles from './block.module.css';
import { useContentEditor } from './context';
import { useEffect, useRef } from 'react';
import { Icon } from '@ophelia/ui';
import { Toolbar, useToolbar } from './toolbar';
import { FloatingPortal } from '@floating-ui/react';
import { ContentEditable } from './content-editable';

interface BlockProps {
  block: ContentBlock;
  idx: number;
}

export const Block = (props: BlockProps) => {
  const { block, idx } = props;
  const { content } = block;

  const { updateBlock, addBlock, removeBlock, focusedBlockId } =
    useContentEditor();

  const editorRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { isOpen, floatingRef, floatingStyles, getFloatingProps, getReferenceProps } =
    useToolbar(buttonRef);

  const placeholder = idx === 0 ? 'Write an about section' : '';

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== content) {
      editorRef.current.innerHTML = content;
    }
  }, [content]);

  useEffect(() => {
    if (focusedBlockId === idx && editorRef.current) {
      editorRef.current.focus();
      const range = document.createRange();
      range.selectNodeContents(editorRef.current);
      range.collapse(false);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
    }
  }, [focusedBlockId, idx]);

  const handleInput = () => {
    if (editorRef.current) {
      updateBlock(idx, { ...block, content: editorRef.current.innerHTML });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      addBlock();
      return
    }

    const hasContent = editorRef.current?.innerText.trim() !== '';

    if (e.key === 'Backspace' && !hasContent  && idx !== 0) {
      console.log('Removing block at index:', idx);
      e.preventDefault();
      removeBlock(idx);
    }
  };

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
          />
        </FloatingPortal>
      )}
    </div>
  );
};
