import { PropsWithChildren } from "react";
import { default as ReactMarkdown } from "react-markdown";
import { Text } from "../text";

interface MarkdownProps {
  children: string | null;
}

export const Markdown: React.FC<MarkdownProps> = (props) => {
  const { children } = props;

  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => (
          <Text role="display" size="sm">
            {children}
          </Text>
        ),
        h2: ({ children }) => (
          <Text role="heading" size="md">
            {children}
          </Text>
        ),
        h3: ({ children }) => (
          <Text role="heading" size="sm">
            {children}
          </Text>
        ),
        h4: ({ children }) => (
          <Text role="heading" size="xs">
            {children}
          </Text>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
};
