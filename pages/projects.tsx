import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import projects from '../lib/projects';

export default function Projects() {
  return (
    <Layout
      title="Florian Soller - Projects"
      description="Portfolio overview of the projects I am working on or have built in the past."
    >
      <div className="flex flex-col justify-center items-center space-y-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            imgSource={project.imgSource}
            name={project.name}
            description={project.description}
            hostedLink={project.hostedLink}
            sourceLink={project.sourceLink}
            noDemo={project.noDemo}
          />
        ))}
      </div>
    </Layout>
  );
}
