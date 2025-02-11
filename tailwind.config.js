/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        'gray-900': '#1F2937', // Ajoute la couleur de fond du mode sombre si nécessaire
      },
    },
  },
  plugins: [],
}

