"use client";

import { useEffect, useState } from "react";
import { createHighlighter } from "shiki";

interface ShikiCodeBlockProps {
  children: string;
  className?: string;
}

export default function ShikiCodeBlock({ children, className }: ShikiCodeBlockProps) {
  const [html, setHtml] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function highlightCode() {
      try {
        const highlighter = await createHighlighter({
          themes: ['github-dark'],
          langs: ['javascript', 'typescript', 'jsx', 'tsx', 'python', 'bash', 'json', 'css', 'html', 'markdown', 'sql', 'yaml', 'toml', 'go', 'rust', 'java', 'c', 'cpp'],
        });

        const language = className?.replace('language-', '') || 'text';
        
        const highlightedHtml = highlighter.codeToHtml(children, {
          lang: language,
          theme: 'github-dark',
        });

        setHtml(highlightedHtml);
      } catch (error) {
        console.error('Error highlighting code:', error);
        setHtml(`<pre><code>${children}</code></pre>`);
      } finally {
        setIsLoading(false);
      }
    }

    highlightCode();
  }, [children, className]);

  if (isLoading) {
    return (
      <div className="bg-gray-100 text-gray-100 p-5 rounded-lg mb-4 border border-gray-700">
        <div className="animate-pulse">Loading syntax highlighting...</div>
      </div>
    );
  }

  return (
    <div 
      className="my-4 rounded-lg overflow-hidden border border-gray-700 bg-gray-950"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
