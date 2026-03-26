import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { headingId } from "@/lib/markdown";
import CodeBlockWithCopy from "@/components/CodeBlockWithCopy";

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ className, children, ...props }) {
          const isBlock = String(children).includes("\n");
          if (isBlock) {
            return (
              <CodeBlockWithCopy className={className}>
                {children}
              </CodeBlockWithCopy>
            );
          }
          return (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        h2({ children }) {
          const id = headingId(String(children));
          return <h2 id={id}>{children}</h2>;
        },
        h3({ children }) {
          const id = headingId(String(children));
          return <h3 id={id}>{children}</h3>;
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
