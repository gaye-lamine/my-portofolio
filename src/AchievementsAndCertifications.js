import React from 'react';

const AchievementsAndCertifications = () => {
  const achievements = [
    {
      title: 'Certification en Développement Mobile (Force-N)',
      image: '/certificat.png',
      description: 'Certification obtenue en 2024 dans le domaine du développement mobile.',
    },
    {
      title: 'Application de Gestion d\'École (HTML, CSS, JavaScript, PHP - MVC)',
      image: 'breukh.png',
      description: 'Développement d\'une application complète de gestion d\'école en utilisant les technologies web (HTML, CSS, JavaScript) et PHP avec une architecture MVC.',
    },
    {
      title: 'Backend pour l\'Application de Gestion d\'École (Laravel, REST API)',
      image: 'laravel.png',
      description: 'Création d\'un backend Laravel pour l\'application de gestion d\'école, mettant en œuvre une API REST pour la communication entre le frontend et le backend.',
    },
    {
      title: 'Application de Gestion Couture (Angular, Laravel)',
      image: 'couture.png',
      description: 'Création d\'une application de gestion couture avec Angular pour le frontend et Laravel pour le backend.',
    },
    {
      title: 'Application de Transaction Bancaire (TypeScript, Laravel)',
      image: 'transaction.png',
      description: 'Développement d\'une application de transaction bancaire avec Laravel pour le backend et TypeScript pour le frontend.',
    },
    {
      title: 'Gestion d\'École Fullstack (Angular, Laravel, Flutter)',
      image: 'school.png',
      description: 'Réalisation d\'un projet fullstack pour la gestion d\'une école, utilisant Angular pour le frontend, Laravel pour le backend, et Flutter pour le développement d\'applications mobiles.',
    },
  ];

  return (
    <section id="projects" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Réalisations et Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
              <img src={achievement.image} alt={achievement.title} className="w-full mb-4" />
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-center">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsAndCertifications;
