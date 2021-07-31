import { Project } from './types';

const imgSource = '/project-previews';

const projectCollection: Project[] = [
  {
    imgSource: `${imgSource}/library-angular-project.png`,
    name: 'Angular Book App',
    description:
      'A project made with Angular and Tailwind, implements localStorage. Additional focus was placed on unit testing with 100% coverage.',
    hostedLink: 'https://flsoller.github.io/library-angular-app/',
    sourceLink: 'https://github.com/flsoller/library-angular-app',
  },
  {
    imgSource: `${imgSource}/reporting-app.png`,
    name: 'Service Reporting App (WIP)',
    description:
      'A work in progress project for tracking, generating and managing technical maintenance reports. This currently uses Typescript, React, React-Router, Axios, Formik, Material-UI, NodeJS with Express and MongoDB',
    hostedLink: 'https://sam-reporting-app.herokuapp.com/',
    sourceLink: 'https://github.com/flsoller/sam-reporting-app',
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
