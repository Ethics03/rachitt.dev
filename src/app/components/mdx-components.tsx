import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import ShikiCodeBlock from "./ShikiCodeBlock";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-6 mt-8 text-white">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mb-4 mt-6 text-white">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mb-3 mt-5 text-white">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold mb-2 mt-4 text-white">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-lg font-semibold mb-2 mt-3 text-white">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-base font-semibold mb-2 mt-3 text-white">
        {children}
      </h6>
    ),

    // Text elements
    p: ({ children }) => (
      <p className="mb-4 text-gray-300 leading-relaxed">
        {children}
      </p>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-white">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="italic text-gray-200">
        {children}
      </em>
    ),

    // Lists
    ul: ({ children }) => (
      <ul className="mb-4 ml-6 list-disc text-gray-300 space-y-1">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal text-gray-300 space-y-1">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-gray-300">
        {children}
      </li>
    ),

    // Links
    a: ({ href, children }) => (
      <Link
        href={href || "#"}
        className="text-orange-400 hover:text-orange-300 underline transition-colors"
      >
        {children}
      </Link>
    ),

    // Code
    code: ({ children, className }) => {
      // If it's inside a pre tag (code block), let pre handle it
      if (className?.includes('language-')) {
        return <code className={className}>{children}</code>;
      }
      // Inline code
      return (
        <code className="bg-gray-800 text-orange-300 px-2 py-1 rounded text-sm font-mono">
          {children}
        </code>
      );
    },
    pre: ({ children }) => {
     
      const codeElement = children?.props;
      if (codeElement?.className?.includes('language-')) {
        return (
          <ShikiCodeBlock className={codeElement.className}>
            {codeElement.children}
          </ShikiCodeBlock>
        );
      }
      // Fallback for regular pre tags
      return (
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 border border-gray-700">
          {children}
        </pre>
      );
    },

    // Blockquotes
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-orange-400 pl-4 my-4 italic text-gray-300 bg-gray-800/50 py-2 rounded-r">
        {children}
      </blockquote>
    ),

    // Horizontal rule
    hr: () => (
      <hr className="my-8 border-gray-700" />
    ),

    // Images
    img: (props) => (
      <Image
        width={800}
        height={300}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        className="rounded-lg mb-4"
        {...props}
      />
    ),

    // Tables
    table: ({ children }) => (
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border-collapse border border-gray-700">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-gray-800">
        {children}
      </thead>
    ),
    tbody: ({ children }) => (
      <tbody>
        {children}
      </tbody>
    ),
    tr: ({ children }) => (
      <tr className="border-b border-gray-700">
        {children}
      </tr>
    ),
    th: ({ children }) => (
      <th className="border border-gray-700 px-4 py-2 text-left font-semibold text-white">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-gray-700 px-4 py-2 text-gray-300">
        {children}
      </td>
    ),

    ...components,
  };
}
