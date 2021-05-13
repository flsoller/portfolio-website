import { GetStaticPaths } from 'next';
import Image from 'next/image';

import { ContentfulClientApi, createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { richTextOptions } from '../../components/Contentful';

import Layout from '../../components/Layout';

const client: ContentfulClientApi = createClient({
  space: String(process.env.CONTENTFUL_SPACE_ID),
  accessToken: String(process.env.CONTENTFUL_ACCESS_KEY),
  host: String(process.env.HOST_URL),
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
  const { title, description, body, picture, twitterCardUrl } = blogPost.fields;

  return (
    <Layout
      title={`Florian Soller - ${title}`}
      description={description}
      twitterCardImageURL={twitterCardUrl && twitterCardUrl}
    >
      <div className="max-w-3xl mx-auto p-4">
        {picture && (
          <Image
            src={`https:${picture.fields.file.url}`}
            width={picture.fields.file.details.image.width}
            height={picture.fields.file.details.image.height}
            // Empty alt tag as picture is only decorative
            alt=""
            layout="responsive"
          />
        )}
        <h1 className="text-center text-3xl font-bold text-gray-800 py-4">
          {title}
        </h1>

        <article>{documentToReactComponents(body, richTextOptions)}</article>
      </div>
    </Layout>
  );
}
