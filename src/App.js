import React, { useState, useEffect } from 'react';
import LoadingScreen from 'react-loading-screen';
import HomeSection from './HomeSection';
import Navbar from './NavbarSection';
import SkillsChart from './SkillsChart';
import EducationSection from './EducationSection';
import WorkExperience from './WorkExperience';
import AchievementsAndCertifications from './AchievementsAndCertifications';
import ContactForm from './ContactForm';
import ServicesSection from './ServicesSection';
import GitHubProfile from './GitHubProfile';
import Footer from './Footer';
import ScrollAnimationProvider from './ScrollAnimationProvider';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulation d'un chargement asynchrone
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Temps en millisecondes

    // Nettoyage du timer lors du démontage du composant
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingScreen
      loading={loading}
      bgColor='#172439'
      spinnerColor='#9ee5f8'
      textColor='#676767'
      logoSrc='lamine.png'
      text='Bienvenue...'
    >
      <ScrollAnimationProvider>
        <Navbar />
        <HomeSection />
        <SkillsChart />
        <EducationSection />
        <WorkExperience />
        <AchievementsAndCertifications />
        <ContactForm />
        <ServicesSection />
        <GitHubProfile />
        <Footer />
      </ScrollAnimationProvider>
    </LoadingScreen>
  );
}

export default App;
