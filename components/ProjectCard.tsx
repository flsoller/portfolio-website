import Image from 'next/image';

import ProjectFrame from '../components/ProjectFrame';
import { Project } from '../lib/types';

export default function ProjectCard(props: Project) {
  const {
    imgSource,
    name,
    description,
    hostedLink,
    sourceLink,
    noDemo,
    index,
  } = props;

  // boolean used for grid row inversion for alternating effect on project page
  const isEven = (index || 0) % 2 === 0 ? true : false;

  return (
    // <article className="flex flex-col lg:flex-row lg:even:flex-row-reverse p-4 lg:p-8 items-center max-w-2xl lg:max-w-6xl lg:space-x-4 align-center">
    <article className="lg:grid lg:grid-cols-2 gap-x-4 lg:items-center p-2 lg:p-6 items-center max-w-7xl align-center">
      <div className={isEven ? 'order-first' : 'order-last'}>
        <ProjectFrame>
          <Image
            className="rounded-lg col-span-1"
            src={imgSource}
            alt="Preview of the project"
            width={1600}
            height={950}
          />
        </ProjectFrame>
      </div>
      <div className="p-8 text-center lg:text-left space-y-6 max-w-lg col-span-1">
        <h1 className="font-bold">{name}</h1>
        <p className="text-base">{description}</p>
        <section className="font-medium flex space-x-6 justify-center lg:justify-start">
          {noDemo ? null : (
            <a
              className="bg-gray-700 text-white px-3 py-2 text-center rounded-md text-base font-medium"
              target="_blank"
              rel="noopener"
              href={hostedLink}
            >
              Live Demo
            </a>
          )}
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
