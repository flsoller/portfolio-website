import Link from 'next/link';

import { FaReact, FaAngular, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="Florian Soller">
      <div className="p-6">
        <h1 className="text-3xl font-extrabold text-gray-800">
          Hi, I'm Florian!
        </h1>
        <h2 className="text-2xl font-bold text-gray-700 mt-4">
          I build applications with modern web technologies.
        </h2>
      </div>
      <div className="flex mt-4 items-center space-x-8 justify-center">
        <SiTypescript className="w-12 h-12 bg-white text-blue-500 rounded-md" />
        <FaReact className="w-12 h-12  text-blue-500 rounded-md" />
        <FaAngular className="w-14 h-14 text-red-500 rounded-md" />
      </div>

      <div className="flex flex-col p-6 items-center">
        <h3 className="text-xl font-bold">Check out some of</h3>
        <div className="mt-3">
          <Link href="/projects">
            <a className="text-gray-200 bg-gray-700 hover:text-white px-4 py-3 text-center rounded-md text-base font-medium">
              MY PROJECTS
            </a>
          </Link>
        </div>
      </div>
      <section className="p-6 mt-4">
        <article className="text-lg text-gray-900 font-medium">
          I’m a self-taught software developer based in Berlin, Germany. I made
          it my mission, learning how to build state of the art web
          applications.
        </article>
      </section>
      <div className="flex flex-col p-6 items-center text-center">
        <p>You can connect with me on Twitter and LinkedIn</p>
        <div className="flex flex-row space-x-2 mt-2">
          <a
            className="bg-blue-400 text-white px-3 py-2 text-center rounded-md text-base font-medium"
            target="_blank"
            rel="noopener"
            href="https://twitter.com/Florian_FSO"
          >
            <FaTwitter />
          </a>
          <a
            className="bg-blue-400 text-white px-3 py-2 text-center rounded-md text-base font-medium"
            target="_blank"
            rel="noopener"
            href="https://www.linkedin.com/in/floriansoller/"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </Layout>
  );
}
