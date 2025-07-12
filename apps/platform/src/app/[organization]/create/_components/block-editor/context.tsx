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
  updateBlock: (id: number, updates: ContentBlock) => void;
  removeBlock: (id: number) => void;
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
      id: blocks.length,
      type: 'paragraph',
      content: '',
      indent: 0,
    };
    setBlocks((prevBlocks) => [...prevBlocks, newBlock]);
    setFocusedBlockId(newBlock.id);
  };

  const updateBlock = (id: number, updates: Partial<Omit<ContentBlock, 'id'>>) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) =>
        block.id === id ? { ...block, ...updates } : block
      )
    );
  };

  const removeBlock = (id: number) => {
    setBlocks((prevBlocks) => prevBlocks.filter((block) => block.id !== id));
    if (focusedBlockId === id) {
      setFocusedBlockId(null);
    }
  };

  useEffect(() => {
    console.log('Content blocks updated:', blocks);
  }, [blocks]);

  const contextValue =
  {
    blocks,
    focusedBlockId,
    addBlock,
    updateBlock,
    removeBlock,
  }

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
