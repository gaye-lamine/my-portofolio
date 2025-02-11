import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const SkillsChart = () => {
    const data = {
        labels: [
            'Rédaction de cahiers des charges', 'Spécifications fonctionnelles et techniques', 
            'Modélisation de données', 'Programmation front-end', 'Stack back-end', 
            'Développement mobile', 'Méthode agile', 'Travail collaboratif', 'Intégration web', 
            'Bases de données relationnelles', 'Frameworks JavaScript et TypeScript', 
            'Construction de projets collaboratifs via Git et Bitbucket'
        ],
        datasets: [{
            data: [90, 85, 80, 75, 70, 80, 85, 90, 85, 80, 75, 90],
            backgroundColor: [
                '#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#2196F3', '#FF8A80',
                '#81C784', '#FFD54F', '#7986CB', '#A1887F', '#FF80AB', '#FFD180',
            ],
            hoverBackgroundColor: [
                '#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#2196F3', '#FF8A80',
                '#81C784', '#FFD54F', '#7986CB', '#A1887F', '#FF80AB', '#FFD180',
            ],
        }],
    };

    const options = {
        animation: {
            animateScale: true,
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
                callbacks: {
                    label: (context) => `Skill: ${context.label}`,
                },
            },
        },
    };

    return (
        <section id="skills" className="bg-gray-900 text-white py-20 dark:bg-gray-800 dark:text-gray-200">
            <h1 className="text-3xl font-bold text-center mb-10">Compétences</h1>
            <div className="container mx-auto flex flex-wrap justify-center">
                <div className="w-full md:w-1/2 pr-8 text-center">
                    {data.labels.map((label, index) => (
                        <div key={index} className="flex items-center mb-2 justify-center">
                            <div className="w-4 h-4 mr-2" style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}></div>
                            <span>{label}</span>
                        </div>
                    ))}
                </div>
                <div style={{ width: '400px', height: '400px' }}>
                    <Doughnut data={data} options={options} />
                </div>
            </div>
        </section>
    );
};

export default SkillsChart;
