import { ContentfulClientApi, createClient } from 'contentful';
import { GetStaticPaths } from 'next';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { richTextOptions } from '../../components/Contentful';

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

export default function BlogPost({ blogPost }: any) {
  return (
    <Layout
      title={`Florian Soller - ${blogPost.fields.title}`}
      description={blogPost.fields.description}
    >
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
