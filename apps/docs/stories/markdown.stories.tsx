import type { Meta, StoryObj } from "@storybook/react";
import { Markdown } from "@ophelia/ui";

const meta: Meta<typeof Markdown> = {
  title: "Markdown",
  component: Markdown,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Markdown>;

export const Basic: Story = {
  render: () => (
    <Markdown>
      {`
# Markdown Showcase

Welcome to the **Markdown** component demo! This covers many supported elements.

## ✨ Typography

### Headings
- \`# Heading 1\`
- \`## Heading 2\`
- \`### Heading 3\`

### Emphasis
- *Italic text*
- **Bold text**
- ~~Strikethrough~~

### Blockquote
> "Markdown is not a replacement for HTML, or even close to it..."  
> — *John Gruber*

## 📋 Lists

### Unordered
- Apples
- Oranges
  - Navel
  - Blood orange

### Ordered
1. Step one
2. Step two
3. Step three

## 🔗 Links & Images

[Visit OpenAI](https://openai.com)

![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)

## 🧾 Code

Inline code: \`const isAwesome = true;\`

\`\`\`ts
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}
\`\`\`

## 📊 Table

| Feature     | Supported |
|-------------|-----------|
| Headings    | ✅        |
| Lists       | ✅        |
| Code Blocks | ✅        |
| Tables      | ✅        |

## ✅ Task List

- [x] Render headings
- [x] Render lists
- [x] Render code blocks
- [ ] Add footnotes support (TBD)

## --- Horizontal Rule

---

That's it!
      `}
    </Markdown>
  ),
  name: "Rich Markdown Demo",
};
