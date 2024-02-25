// Navbar.js
import React from 'react';
import IconButton from '@mui/material/IconButton';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { toggleDarkMode, darkMode } = useTheme();

  return (
    <IconButton color="inherit" onClick={toggleDarkMode}>
      {darkMode ? 'sombre' : 'clair'}
    </IconButton>
  );
};

export default ThemeToggle;
