import { ContentBlock } from "@ophelia/types";
import styles from './block.module.css';
import { useContentEditor } from "./context";
import { useEffect, useRef } from "react";
import { Icon } from "@ophelia/ui";

interface BlockProps {
  block: ContentBlock;
}

export const Block = (props: BlockProps) => {
  const { block } = props;
  const { id } = block;

  const { updateBlock, addBlock, focusedBlockId } = useContentEditor();
  const ref = useRef<HTMLTextAreaElement>(null);

  const placeholder = id === 0 ? 'Write an about section' : ''

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      addBlock()
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateBlock(block.id, {
      ...block,
      content: event.target.value
    });
  };

  useEffect(() => {
    if (focusedBlockId === block.id && ref.current) {
      ref.current.focus();
      ref.current.setSelectionRange(ref.current.value.length, ref.current.value.length);
    }
  }, [focusedBlockId, block.id]);

  return (
    <div className={styles.root}>
      <button className={styles.iconButton}> 
        <Icon name="elipsis" size="md" color="icon-30" className={styles.icon} />
      </button>

      <textarea
        id={`block-${block.id}`}
        ref={ref}
        value={block.content}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={styles.textarea}
      />
    </div>
  );
};
