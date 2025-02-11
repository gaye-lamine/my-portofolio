import React from 'react';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { motion } from 'framer-motion';

const WorkExperience = () => {
    const experienceData = [
        {
            company: "1-more-thing",
            role: "Développeur web/flutter",
            description: "Gestion de la partie UX/UI, intégration des APIs, flutterFlow, vue.js 3 , Nuxt 3 , supabase.",
            date: "2024 - aujourd'hui"
        },
        {
            company: "Teranga code",
            role: "Formateur en développement web: Laravel", 
            description: "Enseignement des bases de Laravel, création de projets et gestion des bases de données .",
            date: "2024 - 2025"
        },
        {
            company: "Proxalys",
            role: "Développeur mobile Flutter",
            description: "Travail sur la partie UX/UI et intégration des APIs.",
            date: "2023 - 2024"
        },
        {
            company: "Kwiku inc",
            role: "Développeur mobile",
            description: "Gestion de la partie UX/UI, intégration des APIs et gestion des dépôts pour la collaboration.",
            date: "2023 - 2024"
        },
        {
            company: "RootSn",
            role: "Ministre",
            description: "Sensibilisation à la cybercriminalité, éducation du public sur les menaces en ligne et meilleures pratiques en matière de sécurité.",
            date: "2022 - 2023"
        },
        {
            company: "Hacktoberfest",
            role: "Contributeur Open Source",
            description: "Participation active au Hacktoberfest sur GitHub.",
            date: "2023 - 2024"
        },
    ];

    return (
        <section id="experience" className="py-20 dark:bg-gray-900 dark:text-gray-400 bg-gray-100 text-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">Expérience Professionnelle</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {experienceData.map((experience, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between cursor-pointer dark:bg-gray-700 shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div>
                  <div className="flex items-center mb-4">
                    <WorkIcon className="text-blue-400 mr-2 dark:text-blue-300" />
                    <h3 className="text-xl font-bold text-gray-100 dark:text-gray-200">{experience.company}</h3>
                  </div>
                  <div className="flex items-center mb-4">
                    <BusinessIcon className="text-gray-400 mr-2 dark:text-gray-500" />
                    <p className="text-gray-300 dark:text-gray-400">{experience.role}</p>
                  </div>
                  <div className="flex items-center mb-4">
                    <p className="text-gray-300 dark:text-gray-400">{experience.description}</p>
                  </div>
                  <div className="flex items-center">
                    <DateRangeIcon className="text-gray-400 mr-2 dark:text-gray-500" />
                    <p className="text-gray-300 dark:text-gray-400">{experience.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
    );
};

export default WorkExperience;
