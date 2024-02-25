import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from './ScrollAnimationProvider';

const ServicesSection = () => {
  const { scrollPosition } = useScrollAnimation();

  return (
    <motion.section
      id="services"
      className="bg-gray-900 text-white py-20 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Mes Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Développeur Backend */}
          <motion.div
            className="service-item bg-gray-800 p-6 rounded-lg shadow-lg relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">Développeur Backend</h3>
            <p className="text-white">Expérience avec Laravel et Spring Boot.</p>
          </motion.div>
          {/* Développeur Frontend */}
          <motion.div
            className="service-item bg-gray-800 p-6 rounded-lg shadow-lg relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">Développeur Frontend</h3>
            <p className="text-white">Compétences en Angular pour la création d'interfaces utilisateur interactives.</p>
          </motion.div>
          {/* Développeur Mobile */}
          <motion.div
            className="service-item bg-gray-800 p-6 rounded-lg shadow-lg relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">Développeur Mobile</h3>
            <p className="text-white">Expérience dans le développement d'applications mobiles avec Flutter.</p>
          </motion.div>
          {/* Concepteur de Base de Données */}
          <motion.div
            className="service-item bg-gray-800 p-6 rounded-lg shadow-lg relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">Concepteur de Base de Données</h3>
            <p className="text-white">Expérience en concepts de modélisation et de gestion de bases de données.</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
