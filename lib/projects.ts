import { Project } from './types';

const imgSource = '/project-previews';

const projectCollection: Project[] = [
  {
    imgSource: `${imgSource}/library-angular-project.png`,
    name: 'Library Angular App',
    description:
      'A project made with Angular and Tailwind, implements localStorage. Additional focus was placed on unit testing with 100% coverage.',
    hostedLink: 'https://flsoller.github.io/library-angular-app/',
    sourceLink: 'https://github.com/flsoller/library-angular-app',
  },
  {
    imgSource: `${imgSource}/library-react-project.png`,
    name: 'Library React App',
    description:
      'A project made with React and Material-UI, implements localStorage.',
    hostedLink: 'https://flsoller.github.io/library-react-app/',
    sourceLink: 'https://github.com/flsoller/library-react-app/',
  },
];

export default projectCollection;
