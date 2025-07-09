export type BlockType = 
  | 'paragraph' 
  | 'h1'
  | 'h2' 
  | 'h3'
  | 'bulletList' 
  | 'numberedList';

export type ContentBlock = {
  id: string;
  type: BlockType;
  content: string;
  indent: number;
  position: number;
};
