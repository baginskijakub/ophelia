import React from 'react';
import styles from './selection-toolbar.module.css'; 
import { Icon, Separator } from '@ophelia/ui';
import { ContentBlock } from '@ophelia/types';

interface SelectionToolbarProps {
  style?: React.CSSProperties;
  block: ContentBlock;
  idx: number;
  applyBold: () => void;
  applyItalic: () => void;
  applyUnderline: () => void;
  ref: (element: HTMLDivElement | null) => void;
}

export const SelectionToolbar = (props: SelectionToolbarProps) => {
  const {
    ref,
    style,
    applyBold,
    applyItalic,
    applyUnderline,
  } = props;

  return (
    <div className={styles.root} ref={ref} style={style}>
      <button className={styles.button} onClick={applyBold}>
        <Icon name="bold" size="sm" color="icon-60" />
      </button>

      <Separator orientation="vertical" className={styles.separator} />

      <button className={styles.button} onClick={applyItalic}>
        <Icon name="italic" size="sm" color="icon-60" />
      </button>

      <Separator orientation="vertical" className={styles.separator} />

      <button className={styles.button} onClick={applyUnderline}>
        <Icon name="underline" size="sm" color="icon-60" />
      </button>
    </div>
  );
};
