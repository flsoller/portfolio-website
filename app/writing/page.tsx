import { Metadata } from 'next';
import Link from 'next/link';
import { format } from 'date-fns';
import { getAllPosts } from '@/lib/posts';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Technical Writing | Florian Soller',
  description: 'Technical posts about AWS services, backend development, and cloud architecture.',
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className="container">
          <h1 className={styles.title}>
            Technical Writing
          </h1>
          <p className={styles.subtitle}>
            Occasional posts about technical challenges, AWS services, and backend development
          </p>

          {posts.length === 0 ? (
            <div className={styles.placeholder}>
              <p className={styles.placeholderText}>
                Posts coming soon...
              </p>
            </div>
          ) : (
            <div className={styles.postsGrid}>
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/writing/${post.slug}`}
                  className={styles.postCard}
                >
                  <div className={styles.postMeta}>
                    <time className={styles.postDate}>
                      {format(new Date(post.date), 'MMMM d, yyyy')}
                    </time>
                    {post.tags && post.tags.length > 0 && (
                      <div className={styles.postTags}>
                        {post.tags.map((tag, index) => (
                          <span key={index} className={styles.postTag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <h2 className={styles.postTitle}>
                    {post.title}
                  </h2>
                  <p className={styles.postDescription}>
                    {post.description}
                  </p>
                  <span className={styles.readMore}>
                    Read more →
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
