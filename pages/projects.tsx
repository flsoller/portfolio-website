import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import projects from '../lib/projects';

export default function Projects() {
  return (
    <Layout title="My Projects">
      {projects.map((project) => (
        <ProjectCard
          key={project.name}
          imgSource={project.imgSource}
          name={project.name}
          description={project.description}
          hostedLink={project.hostedLink}
          sourceLink={project.sourceLink}
        />
      ))}
    </Layout>
  );
}
