import React from 'react';

const GitHubProfile = () => {
  return (
    <section id="github" className="bg-gray-900 text-white py-20 dark:bg-gray-800 dark:text-gray-400">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Profil GitHub</h2>
        <p className="text-center">
          Pour découvrir mes projets et contributions, consultez mon profil GitHub :
          <a
            href="https://github.com/gaye-lamine"
            className="block mt-4 text-blue-500 underline hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voici mon profil GitHub
          </a>
        </p>
      </div>
    </section>
  );
};

export default GitHubProfile;
