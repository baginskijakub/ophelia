import { ContentBlock } from '@ophelia/types';
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { defaultContentBlock } from './utils';

type ContentEditorContextType = {
  blocks: ContentBlock[];
  focusedBlockId: number | null;
  addBlock: () => void;
  updateBlock: (idx: number, updates: Partial<ContentBlock>) => void;
  removeBlock: (idx: number) => void;
};

const ContentEditorContext = createContext<ContentEditorContextType>({} as ContentEditorContextType);

export const ContentEditorProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const [blocks, setBlocks] = useState<ContentBlock[]>([{
    ...defaultContentBlock,
  }]);
  const [focusedBlockId, setFocusedBlockId] = useState<number | null>(null);

  const addBlock = () => {
    const newBlock: ContentBlock = {
      type: 'paragraph',
      content: '',
      indent: 0,
    };

    const newBlocks = [...blocks, newBlock];

    setBlocks(newBlocks);
    setFocusedBlockId(newBlocks.length - 1); 
  };

  const updateBlock = (idx: number, updates: Partial<ContentBlock>) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block, i) =>
        i === idx ? { ...block, ...updates } : block
      )
    );
  };

  const removeBlock = (idx: number) => {
    setBlocks((prevBlocks) => prevBlocks.filter((_, i) => i !== idx));
    setFocusedBlockId((prevFocused) => {
      if (prevFocused === null || prevFocused < idx) return prevFocused;
      return Math.max(0, idx - 1); // Focus on previous block, or 0 if first
    });
  };

  useEffect(() => {
    console.log('Content blocks updated:', blocks);
  }, [blocks]);

  const contextValue = {
    blocks,
    focusedBlockId,
    addBlock,
    updateBlock,
    removeBlock,
  };

  return (
    <ContentEditorContext.Provider value={contextValue}>
      {children}
    </ContentEditorContext.Provider>
  );
};

export const useContentEditor = () => {
  const context = useContext(ContentEditorContext);

  if (!context) {
    throw new Error('useContentEditor must be used within a ContentProvider');
  }

  return context;
};
