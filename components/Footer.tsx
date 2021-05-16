import { FaTwitter, FaLinkedinIn, FaHeart, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="flex flex-col p-6 items-center text-center">
      <div className="flex flex-row justify-center content-center">
        <p>Made with</p>
        <FaHeart className="text-red-500 m-1 mx-2" />
        <p>in Berlin.</p>
      </div>

      <p>You can connect with me on Twitter, LinkedIn and GitHub</p>
      <div className="flex flex-row space-x-2 mt-2">
        <a
          className="bg-blue-400 text-white px-3 py-2 text-center rounded-md text-base font-medium"
          target="_blank"
          rel="noopener"
          href="https://twitter.com/flsoller"
          aria-label="Follow me on Twitter"
        >
          <FaTwitter />
        </a>
        <a
          className="bg-blue-400 text-white px-3 py-2 text-center rounded-md text-base font-medium"
          target="_blank"
          rel="noopener"
          href="https://www.linkedin.com/in/floriansoller/"
          aria-label="Connect with me on LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          className="bg-blue-400 text-white px-3 py-2 text-center rounded-md text-base font-medium"
          target="_blank"
          rel="noopener"
          href="https://github.com/flsoller"
          aria-label="Connect with me on GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}
