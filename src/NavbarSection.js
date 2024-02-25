import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@emotion/react';
import { Stack, ToggleButton, IconButton, Drawer } from '@mui/material';
import { Menu, Brightness1Outlined, Brightness1TwoTone } from '@mui/icons-material';
import { Link, Element } from 'react-scroll';

const Navbar = () => {
    const { toggleDarkMode, darkMode } = useTheme();
    const [openDrawer, setOpenDrawer] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    return (
        <motion.nav
            className="bg-gray-800 py-4 fixed top-0 left-0 w-full z-10"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
        >
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="text-white font-bold text-lg">Accueil</div>
                <ul className="hidden md:flex space-x-4">
                    <a>
                        <li>
                            <Link to="home" smooth={true} duration={500} className="text-white hover:text-gray-300 transition duration-300 cursor-pointer">À Propos</Link>
                        </li>
                    </a>

                    <li>
                        <Link to="experience" smooth={true} duration={500} className="text-white hover:text-gray-300 transition duration-300 cursor-pointer">Compétences</Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500} className="text-white hover:text-gray-300 transition duration-300 cursor-pointer">Projets</Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500} className="text-white hover:text-gray-300 transition duration-300 cursor-pointer">Contact</Link>
                    </li>
                    <li>
                        <Link to="services" smooth={true} duration={500} className="text-white hover:text-gray-300 transition duration-300 cursor-pointer">Services</Link>

                    </li>
                </ul>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    sx={{ display: { md: 'none' } }}
                >
                    <Menu />
                </IconButton>
            </div>
            <Drawer
                anchor="right"
                open={openDrawer}
                onClose={handleDrawerClose}
                sx={{ '& .MuiDrawer-paper': { backgroundColor: '#1F2937', color: 'white' } }}
            >
                <div>
                    <Stack
                        direction="column"
                        spacing={2}
                        sx={{ width: 250, p: 2 }}
                    >
                        <Link to="about" smooth={true} duration={500} className="text-white hover:text-gray-300 transition duration-300 cursor-pointer">À Propos</Link>
                        <Link to="skills" smooth={true} duration={500} className="text-white hover:text-gray-300 transition duration-300 cursor-pointer">Compétences</Link>
                        <Link to="projects" smooth={true} duration={500} className="text-white hover:text-gray-300 transition duration-300 cursor-pointer">Projets</Link>
                        <Link to="contact" smooth={true} duration={500} className="text-white hover:text-gray-300 transition duration-300 cursor-pointer" >Contact</Link>
                        <Link to="services" smooth={true} duration={500} className="text-white hover:text-gray-300 transition duration-300 cursor-pointer">Services</Link>
                    </Stack>
                </div>
            </Drawer>
        </motion.nav>
    );
};

export default Navbar;
