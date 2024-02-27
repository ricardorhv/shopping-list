/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
      colors: {
        purple: {
          default: '#7450AC',
          light: '#A881E6',
          dark: '#523480',
        },

        gray: {
          100: '#FBF9FE',
          200: '#AFABB6',
          300: '#252529',
          400: '#17171A',
          500: '#111112',
          600: '#0C0C0D',
        },

        success: {
          default: '#2F723D',
          light: '#4E995E',
        },

        pink: {
          light: '#DB5BBF',
          dark: '#251622',
        },

        orange: {
          light: '#E07B67',
          dark: '#261A17',
        },

        yellow: {
          light: '#BB9F3A',
          dark: '#211E12',
        },

        green: {
          light: '#8CAD51',
          dark: '#1C2015',
        },

        blue: {
          light: '#7B94CB',
          dark: '#1A1D23',
        },
      },
    },
  },
  plugins: [],
}
