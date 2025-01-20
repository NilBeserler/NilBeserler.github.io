/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          lightest: '#E3F2FD',
          light: '#90CAF9',
          DEFAULT: '#2196F3',
          dark: '#1976D2',
          darkest: '#0D47A1',
        },
        secondary: {
          lightest: '#F3E5F5',
          light: '#CE93D8',
          DEFAULT: '#9C27B0',
          dark: '#7B1FA2',
          darkest: '#4A148C',
        },
        neutral: {
          lightest: '#FAFAFA',
          light: '#E0E0E0',
          DEFAULT: '#9E9E9E',
          dark: '#424242',
          darkest: '#212121',
        }
      },
    },
  },
  plugins: [],
};