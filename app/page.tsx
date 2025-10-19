import Hero from '@/components/Hero';
import Achievements from '@/components/Achievements';
import ProjectPreview from '@/components/ProjectPreview';
import WritingPreview from '@/components/WritingPreview';

export default function Home() {
  return (
    <main>
      <Hero />
      <WritingPreview />
      <Achievements />
      <ProjectPreview />
    </main>
  );
}
