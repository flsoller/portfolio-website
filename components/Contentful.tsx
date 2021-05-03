import { BLOCKS, INLINES } from '@contentful/rich-text-types';

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
      return (
        <p className="text-gray-700 tracking-wide leading-relaxed py-2">
          {children}
        </p>
      );
    },
    [INLINES.HYPERLINK]: (node: any, children: any) => {
      return (
        <a
          className="text-blue-600 p-1 text-center rounded-md text-base font-medium"
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
