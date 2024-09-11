/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--bg-color-primary)',
        secondary: 'var(--bg-color-secondary)',

        backdrop: {
          primary: 'var(--bg-backdrop-primary)',
          secondary: 'var(--bg-backdrop-secondary)',
        },

        accent: {
          primary: 'var(--accent-color-primary)',
          secondary: 'var(--accent-color-secondary)',
        },
      },

      colors: {
        primary: 'var(--text-color-primary)',
        secondary: 'var(--text-color-secondary)',
        tetiary: 'var(--text-color-tetiary)',

        accent: {
          primary: 'var(--accent-color-primary)',
          secondary: 'var(--accent-color-secondary)',
        },
      },

      maxWidth: {
        xs: '480px',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
