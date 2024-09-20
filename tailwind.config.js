/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '320px',
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        //'poppins': ['Poppins', 'sans-serif'],
        'bodoni': ['"Bodoni 72"', 'serif'],
        'certia': ['Certia', 'sans-serif'],
        'fa-brands': ['"Font Awesome 6 Brands"'],
        'fa-free': ['"Font Awesome 6 Free"'],
        'tox': ['"Tox Typewriter"'],
      },
      colors: {
        'dark-gray': '#1a1a1a',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}