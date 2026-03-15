import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Tokistack - Featured Project | Florian Soller',
  description: 'A serverless time logging and tracking application built with AWS Lambda, API Gateway, and PostgreSQL.',
};

export default function ProjectPage() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className="container">
          {/* Project Header */}
          <div className={styles.header}>
            <h2 className={styles.title}>
              Featured Project
            </h2>
          </div>

          {/* Project Overview */}
          <div className={styles.overview}>
            <h3 className={styles.projectTitle}>
              Tokistack
            </h3>
            <p className={styles.projectSubtitle}>
              Instead of a collection of different projects, here you'll find a showcase for clean code,
              solid testing and efficient automation pipelines all wrapped up in a monorepo.
            </p>
            <p className={styles.projectSubtitle}>
              A serverless hour and expense tracking application still being developed.
              The idea and motivation for the project was driven by a request from a friend.
            </p>

            <div className={styles.links}>
              <a
                href="https://app.tokistack.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <span>Live Demo</span>
              </a>
              <a
                href="https://github.com/CodrinoApps/tokistack"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <span>Source Code</span>
              </a>
            </div>
          </div>

          {/* Architecture Grid */}
          <div className={styles.architectureGrid}>
            {/* Backend & API Architecture */}
            <div className={styles.architectureCard}>
              <h4 className={styles.architectureTitle}>
                <span>Backend & API Architecture</span>
              </h4>
              <ul className={styles.architectureList}>
                {[
                  'Node.js/TypeScript backend services',
                  'API Gateway integration and routing',
                  'Lambda authorizer pattern',
                  'RESTful API design principles',
                  'Error handling and structured logging',
                ].map((item, index) => (
                  <li key={index} className={styles.architectureItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* AWS Infrastructure & DevOps */}
            <div className={styles.architectureCard}>
              <h4 className={styles.architectureTitle}>
                <span>AWS Infrastructure & DevOps</span>
              </h4>
              <ul className={styles.architectureList}>
                {[
                  'AWS CDK (Infrastructure as Code)',
                  'S3 for code artifact management',
                  'GitHub Actions CI/CD pipeline',
                  'Terraform managed Cloudflare CDN',
                  'Monorepo with PNPM workspaces & Turbo',
                  '1-Click release pipeline',
                ].map((item, index) => (
                  <li key={index} className={styles.architectureItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Database & Data Layer */}
            <div className={styles.architectureCard}>
              <h4 className={styles.architectureTitle}>
                <span>Database & Data Layer</span>
              </h4>
              <ul className={styles.architectureList}>
                {[
                  'Neon Postgres serverless database',
                  'Drizzle ORM for type-safe queries',
                  'Database migrations with Drizzle Kit',
                  'Multi-tenant data schema design',
                ].map((item, index) => (
                  <li key={index} className={styles.architectureItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* User Interface Layer */}
            <div className={styles.architectureCard}>
              <h4 className={styles.architectureTitle}>
                <span>User Interface Layer</span>
              </h4>
              <ul className={styles.architectureList}>
                {[
                  'Angular with a custom UI library',
                  'Component-based UI architecture',
                ].map((item, index) => (
                  <li key={index} className={styles.architectureItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack */}
          <div className={styles.techStack}>
            <h3 className={styles.techStackTitle}>Technical Stack</h3>
            <div className={styles.techGrid}>
              {/* AWS Infrastructure */}
              <div className={styles.techCategory}>
                <h4 className={styles.techCategoryTitle}>
                  AWS Infrastructure
                </h4>
                <div className={styles.techList}>
                  {['AWS CDK', 'CloudFormation', 'Lambda', 'API Gateway', 'S3'].map((tech, index) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend & API */}
              <div className={styles.techCategory}>
                <h4 className={styles.techCategoryTitle}>
                  Backend & API
                </h4>
                <div className={styles.techList}>
                  {['Node.js', 'TypeScript'].map((tech, index) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Database & ORM */}
              <div className={styles.techCategory}>
                <h4 className={styles.techCategoryTitle}>
                  Database & ORM
                </h4>
                <div className={styles.techList}>
                  {['Neon Postgres', 'Drizzle ORM', 'Migrations'].map((tech, index) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* DevOps & Tooling */}
              <div className={styles.techCategory}>
                <h4 className={styles.techCategoryTitle}>
                  DevOps & Tooling
                </h4>
                <div className={styles.techList}>
                  {['GitHub Actions', 'Jest', 'Turbo', 'PNPM Workspaces'].map((tech, index) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div className={styles.techCategory}>
                <h4 className={styles.techCategoryTitle}>
                  Frontend
                </h4>
                <div className={styles.techList}>
                  {['Angular', 'Cloudflare'].map((tech, index) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Highlights */}
          <div className={styles.highlights}>
            <h3 className={styles.highlightsTitle}>Architecture Highlights</h3>
            <p className={styles.highlightsParagraph}>
              The application follows a serverless-first approach where all compute happens in Lambda functions.
              The authentication flow relies on a dedicated custom Authorizer Lambda attached to API Gateway for access controls.
            </p>
            <p className={styles.highlightsParagraph}>
              The database layer uses Neon Postgres with Drizzle ORM for type-safe database operations. Connection
              pooling is optimized for serverless environments. A Vue 3 interface provides user access to the backend API.
            </p>
            <h3 className={styles.highlightsTitle}>Current Status</h3>
            <p className={styles.highlightsParagraph}>
              The project is currently in progress, building out the backend API implementations and UI components.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
