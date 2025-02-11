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
            company: "Proxalys",
            role: "Développeur mobile Flutter",
            description: "Travail sur la partie UX/UI et intégration des APIs.",
            date: "2023 - jusqu'à aujourd'hui"
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
        <section id="experience" className="bg-gray-900 text-white py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Expérience Professionnelle</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {experienceData.map((experience, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between cursor-pointer"
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.5 }
                            }}
                        >
                            <div>
                                <div className="flex items-center mb-4">
                                    <WorkIcon className="text-gray-400 mr-2" />
                                    <h3 className="text-xl font-bold">{experience.company}</h3>
                                </div>
                                <div className="flex items-center mb-4">
                                    <BusinessIcon className="text-gray-400 mr-2" />
                                    <p>{experience.role}</p>
                                </div>
                                <div className="flex items-center mb-4">
                                    <p>{experience.description}</p>
                                </div>
                                <div className="flex items-center">
                                    <DateRangeIcon className="text-gray-400 mr-2" />
                                    <p>{experience.date}</p>
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
