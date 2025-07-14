import { ContentBlock } from '@ophelia/types';
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

type ContentEditorContextType = {
  blocks: ContentBlock[];
  focusedIdx: number | null;
  focus: (idx: number | null) => void;
  addBlock: (idx: number) => void;
  updateBlock: (idx: number, updates: Partial<ContentBlock>) => void;
  removeBlock: (idx: number) => void;

  placeholder: string;
};

interface ContentEditorProviderProps extends PropsWithChildren {
  blocks: ContentBlock[];
  setBlocks: React.Dispatch<React.SetStateAction<ContentBlock[]>>;
  placeholder: string;
}

const ContentEditorContext = createContext<ContentEditorContextType>({} as ContentEditorContextType);

export const ContentEditorProvider = (props: ContentEditorProviderProps) => {
  const { children, blocks, setBlocks, placeholder } = props;
  const [focusedIdx, focus] = useState<number | null>(null);

  const addBlock = (idx: number) => {
    const newBlock: ContentBlock = {
      type: 'paragraph',
      content: '',
      indent: 0,
    };

    const newBlocks = [...blocks];

    newBlocks.splice(idx + 1, 0, newBlock);

    setBlocks(newBlocks);
    focus(idx);
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
    focus((prevFocused) => {
      if (prevFocused === null || prevFocused < idx) return prevFocused;
      return Math.max(0, idx - 1); // Focus on previous block, or 0 if first
    });
  };

  const contextValue = {
    blocks,
    focusedIdx,
    focus,
    addBlock,
    updateBlock,
    removeBlock,
    placeholder
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
