import Link from 'next/link';
import styles from './ProjectPreview.module.css';

export default function ProjectPreview() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>
          Featured Project
        </h2>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>
            Hour Tracking Application
          </h3>
          <p className={styles.cardSubtitle}>
              Instead of a collection of different projects, here you'll find a showcase for clean code, 
              solid testing and efficient automation pipelines all wrapped up as a monorepo.
          </p>

          <div className={styles.links}>
            <a
              href="https://timecraft.codrino.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span>Live Demo</span>
            </a>
            <a
              href="https://github.com/flsoller/ff-hour-tracker"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span>Source Code</span>
            </a>
          </div>

          <p className={styles.description}>
            Built as a serverless solution on AWS, this application demonstrates a modern backend architecture.
            An API built on Lambda with API Gateway used for routing, Neon Postgres for data persistence, and
            infrastructure as code with AWS CDK.
          </p>

          <Link href="/project" className={styles.detailsLink}>
            View Full Project Details →
          </Link>
        </div>
      </div>
    </section>
  );
}
