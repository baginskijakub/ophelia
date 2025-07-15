import React, { useEffect } from 'react';
import styles from './toolbar.module.css';
import { BlockType, ContentBlock } from '@ophelia/types';
import { useContentEditor } from '../context';
import { Flex, Icon, Text } from '@ophelia/ui';
import { TOOLBAR_OPTIONS } from './utils';

interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  block: ContentBlock
  idx: number;
  close: () => void;
  ref: (node: HTMLDivElement | null) => void;
}

export const Toolbar = (props: ToolbarProps) => {
  const { block, idx, close, ...rest } = props;

  const [hovered, setHovered] = React.useState<BlockType | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { updateBlock } = useContentEditor();

  const onSelect = (type: BlockType) => {
    updateBlock(idx, {
      ...block,
      type,
    });
    close();
  }

  useEffect(() => {
    const container = containerRef.current;

    if (hovered && container) {
      container.style.clipPath = TOOLBAR_OPTIONS.find(option => option.type === hovered)?.clip || 'none';
    }
  }, [hovered, containerRef]);

  return (
    <div className={styles.root} {...rest}>
      <Text role="paragraph" size="sm" color="text-50" className={styles.label}>Turn into</Text>

      {TOOLBAR_OPTIONS.map((option) => (
        <button
          key={option.type}
          className={styles.button}
          onClick={() => onSelect(option.type)}
          onMouseEnter={() => setHovered(option.type)}
        >
          <Flex gap={2} align="center">
            <Icon name={option.icon} size="sm" color="icon-60" />
            {option.label}
          </Flex>

          {block.type === option.type && <Icon name='check' size="sm" color="icon-60" />}
        </button>
      ))
      }

      <div className={styles.clipPathContainer} ref={containerRef}>
        {TOOLBAR_OPTIONS.map((option) => (
          <button
            key={option.type}
            className={styles.button}
            onClick={() => onSelect(option.type)}
            tabIndex={-1}
          >
            <Flex gap={2} align="center">
              <Icon name={option.icon} size="sm" color="icon-60" />
              {option.label}
            </Flex>

            {block.type === option.type && <Icon name='check' size="sm" color="icon-60" />}
          </button>
        ))}
      </div>
    </div >
  );
}
