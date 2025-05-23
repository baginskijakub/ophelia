import { default as ReactMarkdown } from "react-markdown";
import { Text } from "../text";
import styles from "./markdown.module.css";

interface MarkdownProps {
  children: string | null;
}

export const Markdown: React.FC<MarkdownProps> = (props) => {
  const { children } = props;

  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => (
          <Text role="display" size="sm" className={styles.heading}>
            {children}
          </Text>
        ),
        h2: ({ children }) => (
          <Text role="heading" size="md" className={styles.heading}>
            {children}
          </Text>
        ),
        h3: ({ children }) => (
          <Text role="heading" size="sm" className={styles.heading}>
            {children}
          </Text>
        ),
        h4: ({ children }) => (
          <Text role="heading" size="xs" className={styles.heading}>
            {children}
          </Text>
        ),
        h5: ({ children }) => (
          <Text role="heading" size="xs" className={styles.heading}>
            {children}
          </Text>
        ),
        h6: ({ children }) => (
          <Text role="heading" size="xs" className={styles.heading}>
            {children}
          </Text>
        ),
        p: ({ children }) => (
          <Text role="paragraph" size="lg" className={styles.paragraph}>
            {children}
          </Text>
        ),
        li: ({ children }) => (
          <Text role="paragraph" size="lg" className={styles.list} as={"li"}>
            {children}
          </Text>
        ),
        a: ({ children, href }) => (
          <Text
            role="paragraph"
            size="lg"
            className={styles.link}
            as={"a"}
            key={href}
            href={href}
          >
            {children}
          </Text>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
};
