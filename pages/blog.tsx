import { GetStaticProps } from 'next';
import { ContentfulClientApi, createClient } from 'contentful';
import Layout from '../components/Layout';
import PostPreview from '../components/PostPreview';

export const getStaticProps: GetStaticProps = async () => {
  const client: ContentfulClientApi = createClient({
    space: String(process.env.CONTENTFUL_SPACE_ID),
    accessToken: String(process.env.CONTENTFUL_ACCESS_KEY),
  });

  const res = await client.getEntries({ content_type: 'blogPost' });

  return {
    props: {
      blogPost: res.items,
    },
  };
};

export default function Blog({ blogPost }: any) {
  return (
    <Layout title="Florian Soller - Blog">
      <div className="flex flex-col justify-center items-center mt-8 mx-auto space-y-6 md:max-w-5xl p-4 md:p-8">
        <ul className="divide-y divide-gray-300">
          {blogPost.map((post: any) => {
            return (
              <li className="py-12" key={post.sys.id}>
                <PostPreview
                  date={post.fields.createdDate}
                  title={post.fields.title}
                  tags={post.fields.tag}
                  description={post.fields.description}
                  slug={post.fields.slug}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}
