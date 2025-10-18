import Link from 'next/link';
import { format } from 'date-fns';
import { getAllPosts } from '@/lib/posts';
import styles from './WritingPreview.module.css';

export default function WritingPreview() {
  const posts = getAllPosts();
  const latestPost = posts.length > 0 ? posts[0] : null;

  return (
    <section id="blog" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>
          Technical Writing
        </h2>
        <p className={styles.subtitle}>
          Occasional posts about technical challenges, AWS services, and full-stack development
        </p>

        {latestPost ? (
          <Link href={`/writing/${latestPost.slug}`} className={styles.postCard}>
            <div className={styles.postMeta}>
              <time className={styles.postDate}>
                {format(new Date(latestPost.date), 'MMMM d, yyyy')}
              </time>
              {latestPost.tags && latestPost.tags.length > 0 && (
                <div className={styles.postTags}>
                  {latestPost.tags.map((tag, index) => (
                    <span key={index} className={styles.postTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <h3 className={styles.postTitle}>
              {latestPost.title}
            </h3>
            <p className={styles.postDescription}>
              {latestPost.description}
            </p>
            <span className={styles.readMore}>
              Read more →
            </span>
          </Link>
        ) : (
          <div className={styles.placeholder}>
            <p className={styles.placeholderText}>
              Posts coming soon...
            </p>
          </div>
        )}

        <div className={styles.viewAllContainer}>
          <Link href="/writing" className={styles.link}>
            View All Posts →
          </Link>
        </div>
      </div>
    </section>
  );
}
