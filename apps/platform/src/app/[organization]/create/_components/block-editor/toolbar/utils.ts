import { BlockType } from "@ophelia/types";
import { ICON_MAP } from "@ophelia/ui";

interface Option {
  label: string;
  type: BlockType;
  icon: keyof typeof ICON_MAP;
  clip: string;
}


export const TOOLBAR_OPTIONS: Option[] = [
  {
    type: 'h1',
    label: 'Heading 1',
    icon: 'heading-1',
    clip: 'inset(0% 0% 75% 0% round var(--radii-sm))'
  },
  {
    type: 'h2',
    label: 'Heading 2',
    icon: 'heading-2',
    clip: 'inset(25% 0% 50% 0% round var(--radii-sm))'
  },
  {
    type: 'h3',
    label: 'Heading 3',
    icon: 'heading-3',
    clip: 'inset(50% 0% 25% 0% round var(--radii-sm))'
  },
  {
    type: 'paragraph',
    label: 'Paragraph',
    icon: 'paragraph',
    clip: 'inset(75% 0% 0% 0% round var(--radii-sm))'
  }
]

