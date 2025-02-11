import React, { useState, useEffect } from 'react';

function HomeSection() {
    const [text, setText] = useState('');
    const fullText = "Diplômé de Sonatel Academy, j'ai de l'experience en développement fullstack avec une approche créative et rigoureuse. Passionné par l'innovation, je suis prêt à contribuer activement à votre équipe.";

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                currentIndex = 0;
            }
        }, 60); // Réduire l'intervalle pour accélérer la vitesse du texte

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-gray-900 text-white py-20 dark:bg-gray-900 dark:text-gray-200" id='home'>
            <div className="container mx-auto flex flex-col items-center justify-center">
                <img
                    src="./lamine.png"
                    alt="Lamine Gaye"
                    className="rounded-full w-40 h-40 mb-4"
                />
                <h1 className="text-5xl font-bold mb-4 text-gray-100 dark:text-gray-200">Lamine Gaye</h1>
                <p className="text-4xl text-center mb-8">{text}</p>
                <div className="flex">
                    <button
                        className="bg-blue-500 text-white py-2 px-4 mr-4 rounded hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-300"
                        id='contact'
                    >
                        Contactez-moi
                    </button>
                    <a href='./Lamine_Gaye_fullstack_CV.pdf'>
                        <button
                            className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
                        >
                            Voir mon CV
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HomeSection;
