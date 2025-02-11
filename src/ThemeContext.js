import React, { createContext, useState, useContext, useEffect } from 'react';

// Créer le contexte pour le thème
const ThemeContext = createContext();

// Composant provider pour gérer l'état du mode sombre
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Par défaut, mode clair

  // Au changement de isDarkMode, applique ou retire la classe "dark" du body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);  // Re-vérifie chaque fois que isDarkMode change

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode); // Inverser le mode sombre
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useTheme = () => useContext(ThemeContext);
