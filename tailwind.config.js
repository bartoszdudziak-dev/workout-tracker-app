/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        light: {
          primary: 'var(--bg-color-primary-light)',
          secondary: 'var(--bg-color-secondary-light)',
          tetiary: 'var(--bg-color-tetiary-light)',
        },
        accent: {
          primary: 'var(--accent-color-primary)',
          secondary: 'var(--accent-color-secondary)',
        },
      },

      colors: {
        light: {
          primary: 'var(--text-color-primary-light)',
          secondary: 'var(--text-color-secondary-light)',
        },
        accent: {
          primary: 'var(--accent-color-primary)',
          secondary: 'var(--accent-color-secondary)',
        },
      },

      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
