import { ContentBlock } from '@ophelia/types';
import React  from 'react';
import { Block } from './block';
import { Flex } from '@ophelia/ui';

interface Props {
  content: ContentBlock[];
  onUpdate: (content: ContentBlock[]) => void;
}

export const BlockEditor = (props: Props) => {
  const {content, onUpdate } = props;

  return (
  <Flex direction="column" gap={2} className="w-full">
    {content.map((block) => (
      <Block key={block.id} block={block} onChange={(v) => onUpdate([...content, v])}/>
    ))}
  </Flex>
  )
};
