import styles from './Achievements.module.css';

export default function Achievements() {
  const achievements = [
    {
      title: 'LLM-Powered Reporting Assistant with AWS Bedrock',
      description:
        'Built a natural language data reporting system using AWS Bedrock, Lambda and DynamoDB. The system processes user requests through sequential LLM calls to categorize intent, generate SQL queries, and return formatted reports, enabling non-technical users to access their data through conversational interactions.',
    },
    {
      title: 'AWS Lambda based Kinesis Stream Processor',
      description:
        'Migrated a legacy ECS-based Kinesis stream processor to AWS Lambda with event source mapping, reducing average maximum processing delay by 90%.',
    },
    {
      title: 'Event-Driven Architecture with AWS EventBridge',
      description:
        'Designed a foundational architecture for decomposing a monolithic product on the basis of AWS EventBridge, enabling product teams to develop features independently within their domains. Established patterns for event-driven communication and service decoupling through a shared "Event-Library" used by all product teams.',
    },
    {
      title: 'Push Notification Backend with AWS SNS',
      description:
        'Implemented a push notification system using AWS SNS, enabling real-time notifications for mobile platforms. Included a company-first backend controlled UI mobile screen for customizing user settings.',
    },
  ];

  return (
    <section id="achievements" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>
          Career Achievements
        </h2>
        <p className={styles.subtitle}>
          Contributions and successes I've celebrated in over 4 years of working as a Software Developer
        </p>

        <div className={styles.grid}>
          {achievements.map((achievement, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>
                {achievement.title}
              </h3>
              <p className={styles.cardDescription}>
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
