import { BLOCKS, INLINES } from '@contentful/rich-text-types';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/hljs/dracula';

// Set up optimised syntax highlighter
SyntaxHighlighter.registerLanguage('javascript', js);

// Contentful render options
export const richTextOptions = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node: any, children: any) => {
      return (
        <h2 className="text-xl text-gray-800 font-semibold pt-6 pb-2 tracking-wider">
          {children}
        </h2>
      );
    },
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
      if (
        node.content.length === 1 &&
        node.content[0].marks.some((mark: any) => mark.type === 'code')
      ) {
        return (
          <div className="my-2 overflow-auto max-h-60 tracking-tighter text-xs md:text-sm">
            <SyntaxHighlighter language="javascript" style={dracula}>
              {node.content[0].value}
            </SyntaxHighlighter>
          </div>
        );
      }
      return (
        <p className="text-gray-700 tracking-wide leading-relaxed py-2 text-base">
          {children}
        </p>
      );
    },
    [INLINES.HYPERLINK]: (node: any, children: any) => {
      return (
        <a
          className="text-blue-600 text-center rounded-md text-base font-medium"
          target="_blank"
          rel="noopener"
          href={node.data.uri}
        >
          {children}
        </a>
      );
    },
  },
};
