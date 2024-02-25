import React from 'react';
import { motion } from 'framer-motion';

const EducationSection = () => {
    return (
        <section id="education" className="bg-gray-900 text-white py-20">
            <div className="container mx-auto px-4"> {/* Ajout de px-4 pour l'espace horizontal */}
                <h2 className="text-3xl font-bold text-center mb-10">Formation</h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {/* Sonatel Academy */}
                    <motion.div
                        className="card h-64 bg-gray-800 rounded-lg shadow-md p-6"
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.5 }
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3 className="text-xl font-semibold mb-2">Sonatel Academy</h3>
                        <p className="text-gray-300 mb-2">Développeur Fullstack Web et Mobile</p>
                        <p className="text-gray-300 mb-2">2022 - 2023</p>
                    </motion.div>

                    {/* Xarala */}
                    <motion.div
                        className="card h-64 bg-gray-800 rounded-lg shadow-md p-6"
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.5 }
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3 className="text-xl font-semibold mb-2">Xarala</h3>
                        <p className="text-gray-300 mb-2">Certification Fullstack JavaScript</p>
                        <p className="text-gray-300 mb-2">En 2022: trois mois de formation axée projet</p>
                    </motion.div>

                    {/* Institut Polytechnique des Métiers */}
                    {/* Add motion animation for zoom effect */}
                    <motion.div
                        className="card h-64 bg-gray-800 rounded-lg shadow-md p-6"
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.5 }
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <h3 className="text-xl font-semibold mb-2">Institut Polytechnique des Métiers</h3>
                        <p className="text-gray-300 mb-2">Génie Logiciel et Sécurité Informatique: Licence 3</p>
                        <p className="text-gray-300 mb-2">2019 - 2022</p>
                    </motion.div>

                    {/* Université Cheikh Anta Diop de Dakar */}
                    <motion.div
                        className="card h-64 bg-gray-800 rounded-lg shadow-md p-6"
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.5 }
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <h3 className="text-xl font-semibold mb-2">Université Cheikh Anta Diop de Dakar</h3>
                        <p className="text-gray-300 mb-2">Physique Chimie Science de la Matière: Licence 3</p>
                        <p className="text-gray-300 mb-2">2019 - 2022</p>
                    </motion.div>

                    {/* Lycée de Yeumbeul */}
                    <motion.div
                        className="card h-64 bg-gray-800 rounded-lg shadow-md p-6"
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.5 }
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        <h3 className="text-xl font-semibold mb-2">Lycée de Yeumbeul</h3>
                        <p className="text-gray-300 mb-2">Baccalauréat Scientifique</p>
                        <p className="text-gray-300 mb-2">2019 - 2020</p>
                    </motion.div>

                    {/* Mémoire de Licence */}
                    <motion.div
                        className="card h-64 bg-gray-800 rounded-lg shadow-md p-6"
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.5 }
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <h3 className="text-xl font-semibold mb-2">Mémoire de Licence</h3>
                        <p className="text-gray-300 mb-2">Titre: "Conception d’une application de gestion des ventes dans une pharmacie"</p>
                        <p className="text-gray-300 mb-2">Réalisé en utilisant Java, ce projet a impliqué la conception et le développement complet d'une application de gestion des ventes</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default EducationSection;
