import { ContentBlock } from '@ophelia/types';
import React, { KeyboardEvent } from 'react';

interface BlockEditorProps {
  block: ContentBlock
  onUpdate: (id: string, updates: Partial<ContentBlock>) => void;
  onFocus: (id: string) => void;
  isFocused: boolean;
}

export const BlockEditor = (props: BlockEditorProps) => {
  const { block, onUpdate, onFocus, isFocused } = props;

  const handleContentChange = (newContent: string) => {
    onUpdate(block.id, { content: newContent });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // Create new block logic
    }
    // Handle other shortcuts like Tab for indent
  };

  const renderBlock = () => {
    const commonProps = {
      contentEditable: true,
      suppressContentEditableWarning: true,
      onInput: (e) => handleContentChange(e.currentTarget.textContent || ''),
      onFocus: () => onFocus(block.id),
      onKeyDown: handleKeyDown,
      style: { marginLeft: `${block.indent * 20}px` }
    };

    switch (block.type) {
      case 'h1':
        return <h1 {...commonProps}>{block.content}</h1>;
      case 'h2':
        return <h2 {...commonProps}>{block.content}</h2>;
      case 'h3':
        return <h3 {...commonProps}>{block.content}</h3>;
      case 'bulletList':
        return <li {...commonProps}>• {block.content}</li>;
      case 'numberedList':
        return <li {...commonProps}>1. {block.content}</li>;
      default:
        return <p {...commonProps}>{block.content}</p>;
    }
  };

  return renderBlock();
};
