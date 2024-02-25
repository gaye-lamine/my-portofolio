import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>© 2024 Lamine Gaye. Tous droits réservés.</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/abda-gaye" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://twitter.com/LamineG18940939" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.linkedin.com/in/lamine-gaye-80b45b21a/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition duration-300">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
