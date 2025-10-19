import { Metadata } from 'next';
import Link from 'next/link';
import { format } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts';
import { notFound } from 'next/navigation';
import StructuredData from '@/components/StructuredData';
import styles from './page.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Florian Soller`,
    description: post.description,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: ['Florian Soller'],
      tags: post.tags,
      url: `https://flsoller.dev/writing/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const blogPostingData = {
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Florian Soller',
      url: 'https://flsoller.dev',
    },
    publisher: {
      '@type': 'Person',
      name: 'Florian Soller',
    },
    url: `https://flsoller.dev/writing/${slug}`,
    keywords: post.tags?.join(', '),
    articleBody: post.description,
    inLanguage: 'en-US',
  };

  return (
    <>
      <StructuredData data={blogPostingData} />
      <main className={styles.main}>
        <article className={styles.article}>
        <div className="container">
          {/* Back Link */}
          <Link href="/writing" className={styles.backLink}>
            ← Back to Writing
          </Link>

          {/* Post Header */}
          <header className={styles.header}>
            <div className={styles.meta}>
              <time className={styles.date}>
                {format(new Date(post.date), 'MMMM d, yyyy')}
              </time>
              {post.tags && post.tags.length > 0 && (
                <div className={styles.tags}>
                  {post.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <h1 className={styles.title}>
              {post.title}
            </h1>
            <p className={styles.description}>
              {post.description}
            </p>
          </header>

          {/* Post Content */}
          <div className={styles.content}>
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeHighlight],
                },
              }}
            />
          </div>

          {/* Back to Writing */}
          <div className={styles.footer}>
            <Link href="/writing" className={styles.backLink}>
              ← Back to Writing
            </Link>
          </div>
        </div>
      </article>
    </main>
    </>
  );
}
