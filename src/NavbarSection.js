import React from 'react';
import { motion } from 'framer-motion';
import { Stack, IconButton, Drawer } from '@mui/material';
import { Menu, DarkMode, LightMode } from '@mui/icons-material';
import { Link } from 'react-scroll';
import { useTheme } from './ThemeContext';  // Importer le hook useTheme

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme(); // Utiliser le hook pour récupérer le mode sombre
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <motion.nav
    className={`py-4 fixed top-0 left-0 w-full z-10 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`} 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
  >
    <div className="container mx-auto flex justify-between items-center px-4">
      <div className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        Accueil
      </div>
      <ul className="hidden md:flex space-x-4">
        <li>
          <Link to="home" smooth={true} duration={500} className={`hover:${isDarkMode ? 'text-gray-300' : 'text-blue-600'} transition duration-300 cursor-pointer ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            À Propos
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500} className={`hover:${isDarkMode ? 'text-gray-300' : 'text-blue-600'} transition duration-300 cursor-pointer ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Services
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className={`hover:${isDarkMode ? 'text-gray-300' : 'text-blue-600'} transition duration-300 cursor-pointer ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex items-center">
        <IconButton color="inherit" onClick={toggleDarkMode}>
          {isDarkMode ? <LightMode /> : <DarkMode />}
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          sx={{ display: { md: 'none' } }}
        >
          <Menu />
        </IconButton>
      </div>
    </div>
  </motion.nav>
  
  );
};

export default Navbar;
