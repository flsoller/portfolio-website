import { Project } from './types';

const imgSource = '/project-previews';

const projectCollection: Project[] = [
  {
    imgSource: `${imgSource}/hour-tracker.png`,
    name: '(WIP) Hour Tracking App',
    description:
      'Work in progress full stack application featuring Docker, Postgres, Prisma, Express and Vue',
    hostedLink: 'https://hour-tracker.flsoller.dev/login',
    sourceLink: 'https://github.com/flsoller/ff-hour-tracker',
  },
  {
    imgSource: `${imgSource}/reporting-app.png`,
    name: 'Demo Reporting App',
    description:
      'A sample project for tracking, generating and managing technical maintenance reports. Stack: Typescript, Angular 12, Angular Material, TailwindCSS, Jest, NodeJS with Express and MongoDB.',
    hostedLink: '',
    sourceLink: 'https://github.com/flsoller/sam-reporting-app',
    noDemo: true,
  },
  {
    imgSource: `${imgSource}/library-angular-project.png`,
    name: 'Angular Book App',
    description:
      'A project made with Angular and Tailwind, implements localStorage. Additional focus was placed on unit testing with 100% coverage.',
    hostedLink: 'https://flsoller.github.io/library-angular-app/',
    sourceLink: 'https://github.com/flsoller/library-angular-app',
  },
  {
    imgSource: `${imgSource}/library-react-project.png`,
    name: 'React Book App',
    description:
      'A project made with React and Material-UI, implements localStorage.',
    hostedLink: 'https://flsoller.github.io/library-react-app/',
    sourceLink: 'https://github.com/flsoller/library-react-app/',
  },
  {
    imgSource: `${imgSource}/weather-app-project.png`,
    name: 'React Weather App',
    description:
      'Uses ReactJS and Styled-Components. Implements OpenWeatherMap API calls with Async/Await syntax.',
    hostedLink: 'https://flsoller.github.io/weather-app/',
    sourceLink: 'https://github.com/flsoller/weather-app',
  },
];

export default projectCollection;
