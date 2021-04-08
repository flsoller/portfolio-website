import { Project } from '../lib/types';

export default function ProjectCard(props: Project) {
  const { imgSource, name, description, hostedLink, sourceLink } = props;

  return (
    <article className=" bg-gray-200 w-full sm:rounded-xl p-8 max-w-xl shadow-lg sm:m-4">
      <img
        className="mx-auto"
        src={`${imgSource}`}
        alt="Preview of the project"
      />
      <div className="pt-2 sm:p-8 text-center space-y-4 h-52">
        <h1 className="font-bold">{name}</h1>
        <p className="text-base">{description}</p>
        <section className="font-medium flex space-x-3 justify-center">
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
