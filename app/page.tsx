import Hero from '@/components/Hero';
import Achievements from '@/components/Achievements';
import ProjectPreview from '@/components/ProjectPreview';
import WritingPreview from '@/components/WritingPreview';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  const personData = {
    '@type': 'Person',
    name: 'Florian Soller',
    jobTitle: 'Senior Software Developer',
    description: 'Senior Software Developer specializing in backend development on AWS. Focused on serverless architectures, AI/LLM integration, API design, and PostgreSQL databases.',
    url: 'https://flsoller.dev',
    sameAs: [
      'https://github.com/flsoller',
      'https://www.linkedin.com/in/floriansoller/',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Berlin',
      addressCountry: 'Germany',
    },
    knowsAbout: [
      'AWS',
      'Serverless Architecture',
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'Lambda Functions',
      'API Design',
      'Docker',
      'Backend Development',
    ],
  };

  const websiteData = {
    '@type': 'WebSite',
    name: 'Florian Soller',
    url: 'https://flsoller.dev',
    description: 'Personal web presence of Florian Soller, Senior Software Developer specializing in AWS and backend development.',
    author: {
      '@type': 'Person',
      name: 'Florian Soller',
    },
  };

  return (
    <>
      <StructuredData data={personData} />
      <StructuredData data={websiteData} />
      <main>
        <Hero />
        <WritingPreview />
        <Achievements />
        <ProjectPreview />
      </main>
    </>
  );
}
