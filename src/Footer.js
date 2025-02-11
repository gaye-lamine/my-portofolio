import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 dark:bg-gray-800 dark:text-gray-400">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>© 2025 Lamine Gaye. Tous droits réservés.</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com/gaye-lamine"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition duration-300 dark:text-gray-500 dark:hover:text-gray-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://twitter.com/LamineG18940939"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition duration-300 dark:text-gray-500 dark:hover:text-gray-400"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/lamine-gaye-80b45b21a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition duration-300 dark:text-gray-500 dark:hover:text-gray-400"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
