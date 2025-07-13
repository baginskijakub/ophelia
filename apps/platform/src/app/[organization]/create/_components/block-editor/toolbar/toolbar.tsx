import React from 'react';
import styles from './toolbar.module.css';
import { Separator } from '@ophelia/ui';
import { BlockType, ContentBlock } from '@ophelia/types';
import { useContentEditor } from '../context';

interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  ref: (element: HTMLDivElement | null) => void;
  block: ContentBlock
  idx: number;
  close: () => void;
}

export const Toolbar = (props: ToolbarProps) => {
  const { ref, block, idx, close, ...rest } = props;

  const { updateBlock } = useContentEditor();

  const onSelect = (type: BlockType) => {
    updateBlock(idx,{
      ...block,
      type,
    });
    close();
  }

  return (
    <div className={styles.root} ref={ref} {...rest}>
      <button className={styles.button} onClick={() => onSelect('h1')}>
        H1
      </button>

      <Separator orientation="vertical" className={styles.separator} />

      <button className={styles.button} onClick={() => onSelect('h2')}>
        H2
      </button>

      <Separator orientation="vertical" className={styles.separator} />

      <button className={styles.button} onClick={() => onSelect('h3')}>
        H3
      </button>

      <Separator orientation="vertical" className={styles.separator} />

      <button className={styles.button} onClick={() => onSelect('paragraph')}>
        Paragraph
      </button>
    </div>
  );
};
