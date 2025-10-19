import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Hour Tracker - Featured Project | Florian Soller',
  description: 'A serverless hour and expense tracking application built with AWS Lambda, API Gateway, and PostgreSQL.',
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
              Hour Tracker
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
                  'Docker based AWS Lambda functions',
                  'Node.js/TypeScript backend services',
                  'API Gateway integration and routing',
                  'JWT-based authentication flow',
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
                  'ECR for container image management',
                  'GitHub Actions CI/CD pipeline',
                  'Monorepo with Yarn workspaces & Turbo',
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
                  'Vue 3 with TailwindCSS',
                  'Vite build tooling',
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
              {/* Backend & API */}
              <div className={styles.techCategory}>
                <h4 className={styles.techCategoryTitle}>
                  Backend & API
                </h4>
                <div className={styles.techList}>
                  {['Node.js', 'TypeScript', 'JWT Auth'].map((tech, index) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* AWS Infrastructure */}
              <div className={styles.techCategory}>
                <h4 className={styles.techCategoryTitle}>
                  AWS Infrastructure
                </h4>
                <div className={styles.techList}>
                  {['AWS CDK', 'CloudFormation', 'Lambda', 'API Gateway', 'ECR'].map((tech, index) => (
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
                  {['GitHub Actions', 'Jest', 'Turbo', 'Yarn Workspaces'].map((tech, index) => (
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
                  {['Vue 3', 'Vite', 'TailwindCSS'].map((tech, index) => (
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
              The authentication flow uses a dedicated Authenticator Lambda that issues JWTs, which are then
              validated by an Authorizer Lambda attached to API Gateway.
            </p>
            <p className={styles.highlightsParagraph}>
              The database layer uses Neon Postgres with Drizzle ORM for type-safe database operations. Connection
              pooling is optimized for serverless environments. A Vue 3 interface provides user access to the backend API.
            </p>
            <h3 className={styles.highlightsTitle}>Current Status</h3>
            <p className={styles.highlightsParagraph}>
              With the Lambda functions currently being containerized, I want to switch to S3 for hosting the zipped source code
              instead of ECR. I noticed a higher cold start penalty and given that this is a side project, S3 storage costs are lower
              compared to the container registry.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
