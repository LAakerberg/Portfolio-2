/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: '400px',
        // => @media (min-width: 400px) { ... }
        tablet: '500px',
        // => @media (min-width: 400px) { ... }
        sm: '640px',
        // => @media (min-width: 640px) { ... }
        md: '768px',
        // => @media (min-width: 640px) { ... }
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        '3xl': '1836px',
        // => @media (min-width: 1836px) { ... }
      },
      animation: {
        slowly: 'slow 0.2s ease-in-out',
        slow: 'slow 0.6s ease-in-out',
        'fade-in': 'fade-in 0.9s ease-in-out',
        'fade-out': 'fade-out 0.9s ease-in-out',
      },
      keyframes: {
        slow: {
          '0%, 50%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '70%': { opacity: '0.7', transform: 'translateX(10%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-out': {
          '0%': { opacity: '0', transform: 'translateX(0%)' },
          '50%': { opacity: '1', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(500%)' },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.5xl') },
        h2: { fontSize: theme('fontSize.4xl') },
        h3: { fontSize: theme('fontSize.3xl') },
        h4: { fontSize: theme('fontSize.2xl') },
        h5: { fontSize: theme('fontSize.xl') },
      });
    }),
  ],
};
