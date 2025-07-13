import { ContentBlock } from "@ophelia/types";

export const defaultContentBlock: ContentBlock = {
  type: 'paragraph',
  content: '',
  indent: 0,
}

export const focusEditorByIdx = (
  idx: number,
  position: 'start' | 'end' = 'end'
) => {
  const editor = document.getElementById(`content-editable-${idx}`) as HTMLDivElement | null;

  if (!editor) return;

  editor.focus();

  const range = document.createRange();
  range.selectNodeContents(editor);
  range.collapse(position === 'end' ? false : true);

  const sel = window.getSelection();
  sel?.removeAllRanges();
  sel?.addRange(range);
};

