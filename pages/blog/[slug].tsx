import { ContentfulClientApi, createClient } from 'contentful';
import { GetStaticPaths } from 'next';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

import Layout from '../../components/Layout';

const client: ContentfulClientApi = createClient({
  space: String(process.env.CONTENTFUL_SPACE_ID),
  accessToken: String(process.env.CONTENTFUL_ACCESS_KEY),
});

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.getEntries<any>({
    content_type: 'blogPost',
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }: any) {
  const { items } = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': params.slug,
  });

  return {
    props: {
      blogPost: items[0],
    },
  };
}

const richTextOptions = {
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
          className="bg-blue-400 text-white p-1 text-center rounded-md text-base font-medium"
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

export default function BlogPost({ blogPost }: any) {
  console.log(blogPost);

  return (
    <Layout title={`Florian Soller - Blog - ${blogPost.fields.title}`}>
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-center text-3xl font-bold text-gray-800 py-4">
          {blogPost.fields.title}
        </h1>

        <article>
          {documentToReactComponents(blogPost.fields.body, richTextOptions)}
        </article>
      </div>
    </Layout>
  );
}
