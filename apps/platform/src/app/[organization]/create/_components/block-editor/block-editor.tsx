import React  from 'react';
import { Block } from './block';
import { Flex } from '@ophelia/ui';
import { useContentEditor } from './context';
import styles from './block-editor.module.css';

export const BlockEditor = () => {
  const { blocks} = useContentEditor(); 

  return (
  <Flex direction="column" gap={2} className={styles.root}>
    {blocks.map((block, idx) => (
      <Block key={`block-${idx}`} block={block} idx={idx}/>
    ))}
  </Flex>
  )
};
