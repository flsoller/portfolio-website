import Image from 'next/image';

import ProjectFrame from '../components/ProjectFrame';
import { Project } from '../lib/types';

export default function ProjectCard(props: Project) {
  const { imgSource, name, description, hostedLink, sourceLink } = props;

  return (
    <article className="flex flex-col lg:flex-row lg:even:flex-row-reverse p-4 lg:p-8 items-center max-w-2xl lg:max-w-6xl lg:space-x-4 align-center">
      <ProjectFrame>
        <Image
          className="rounded-lg"
          src={imgSource}
          alt="Preview of the project"
          width={650}
          height={400}
          layout="intrinsic"
        />
      </ProjectFrame>
      <div className="p-8 text-center lg:text-left space-y-6 max-w-lg">
        <h1 className="font-bold">{name}</h1>
        <p className="text-base">{description}</p>
        <section className="font-medium flex space-x-6 justify-center lg:justify-start">
          <a
            className="bg-gray-700 text-white px-3 py-2 text-center rounded-md text-base font-medium"
            target="_blank"
            rel="noopener"
            href={hostedLink}
          >
            Live Demo
          </a>
          <a
            className="bg-gray-700 text-white px-3 py-2 text-center rounded-md text-base font-medium"
            target="_blank"
            rel="noopener"
            href={sourceLink}
          >
            Source
          </a>
        </section>
      </div>
    </article>
  );
}
