import React, { useRef, useEffect } from 'react';
import { Chart, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
Chart.register(ArcElement);

const SkillsChart = () => {
    const chartRef = useRef(null);

    const data = {
        labels: ['Rédaction de cahiers des charges', 'Spécifications fonctionnelles et techniques', 'Modélisation de données', 'Programmation front-end', 'Stack back-end', 'Développement mobile', 'Méthode agile', 'Travail collaboratif', 'Intégration web', 'Bases de données relationnelles', 'Frameworks JavaScript et TypeScript', 'Construction de projets collaboratifs via Git et Bitbucket'],
        datasets: [{
            data: [90, 85, 80, 75, 70, 80, 85, 90, 85, 80, 75, 90],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4CAF50',
                '#2196F3',
                '#FF8A80',
                '#81C784',
                '#FFD54F',
                '#7986CB',
                '#A1887F',
                '#FF80AB',
                '#FFD180',
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4CAF50',
                '#2196F3',
                '#FF8A80',
                '#81C784',
                '#FFD54F',
                '#7986CB',
                '#A1887F',
                '#FF80AB',
                '#FFD180',
            ],
        }],
    };

    useEffect(() => {
        const chartInstance = chartRef.current.chartInstance;
        if (chartInstance) {
            chartInstance.options.plugins.tooltip.callbacks.label = function (context) {
                return 'Skill: ' + context.label;
            };
            chartInstance.update();
        }
    }, []);

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
            }
        },
    };

    return (
        <section id="skills" className="bg-gray-900 text-white py-20">
            <h1 className="text-3xl font-bold mb-4 text-center mb-10">Compétences</h1>

            <div className="container mx-auto flex flex-wrap justify-center">

                <div className="w-full md:w-1/2 pr-8 text-center">
                    {data.labels.map((label, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <div className="w-4 h-4 mr-2" style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}></div>
                            <span>{label}</span>
                        </div>
                    ))}
                </div>
                <div style={{ width: '400px', height: '400px' }}>
                    <Doughnut ref={chartRef} data={data} options={options} />
                </div>
            </div>
        </section>
    );
};

export default SkillsChart;
