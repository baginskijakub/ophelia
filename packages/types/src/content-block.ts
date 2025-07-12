export type BlockType = 
  | 'paragraph' 
  | 'h1'
  | 'h2' 
  | 'h3'
  | 'bulletedList';

export type ContentBlock = {
  type: BlockType;
  content: string;
  indent: number;
};
