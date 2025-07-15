// components/Badge/Badge.tsx
'use client';

import * as React from 'react';
import { Icon } from '@ophelia/ui';
import styles from './badge.module.css';

interface BadgeProps {
  badge: string;
  index: number;
  onRemoveBadge: (index: number) => void;
  onUpdateBadgeContent: (index: number, content: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLSpanElement>, index: number) => void;
  isLastBadge: boolean;
  lastBadgeRef: React.RefObject<HTMLSpanElement | null>;
}

export const Badge = (props: BadgeProps) => {
  const {
    badge,
    index,
    onRemoveBadge,
    onUpdateBadgeContent,
    onKeyDown,
    isLastBadge,
    lastBadgeRef,
  } = props;

  const handleBlur = (e: React.FocusEvent<HTMLSpanElement>) => {
    const content = e.target.textContent?.trim() || '';
    if (content === '') {
      onRemoveBadge(index);
    } else {
      onUpdateBadgeContent(index, content);
    }
  };

  return (
    <div
      className={styles.badge}
    >
      <span
        className={styles.content}
        contentEditable
        suppressContentEditableWarning
        onKeyDown={(e) => onKeyDown(e, index)}
        onBlur={handleBlur}
        aria-label={`Badge ${index + 1}`}
        ref={isLastBadge ? lastBadgeRef : null}
        data-placeholder="Add badge"
      >
        {badge}
      </span>

      <Icon
        name="x"
        size="sm"
        color="icon-30"
        as="button"
        onClick={() => onRemoveBadge(index)}
        className={styles.removeIcon}
      />
    </div >
  );
};
