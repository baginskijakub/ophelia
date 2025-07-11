import React  from 'react';
import { Block } from './block';
import { Flex } from '@ophelia/ui';
import { useContentEditor } from './context';

export const BlockEditor = () => {
  const { blocks} = useContentEditor(); 

  return (
  <Flex direction="column" gap={2} className="w-full">
    {blocks.map((block, idx) => (
      <Block key={`block-${idx}`} block={block} idx={idx}/>
    ))}
  </Flex>
  )
};
