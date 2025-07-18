export type BlockType =
  | 'paragraph'
  | 'h1'
  | 'h2'
  | 'h3'

export type ContentBlock = {
  type: BlockType;
  content: string;
};
