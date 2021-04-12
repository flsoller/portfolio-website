import ProjectFrame from '../components/ProjectFrame';
import { Project } from '../lib/types';

export default function ProjectCard(props: Project) {
  const { imgSource, name, description, hostedLink, sourceLink } = props;

  return (
    <article className="flex flex-col lg:flex-row lg:even:flex-row-reverse p-4 lg:p-8 items-center max-w-2xl lg:max-w-6xl lg:space-x-4 align-center">
      <ProjectFrame>
        <img
          className="rounded-md mx-auto"
          src={`${imgSource}`}
          alt="Preview of the project"
        />
      </ProjectFrame>
      <div className="p-8 text-center lg:text-left space-y-6">
        <h1 className="font-bold">{name}</h1>
        <p className="text-base">{description}</p>
        <section className="font-medium flex space-x-6 justify-center lg:justify-start">
          {/* ToDo: Set buttons as Link Components from next/links */}
          <button className="bg-gray-700 text-white px-3 py-2 text-center rounded-md text-base font-medium">
            Live Demo
          </button>
          <button className="bg-gray-700 text-white px-3 py-2 text-center rounded-md text-base font-medium">
            Source
          </button>
        </section>
      </div>
    </article>
  );
}
