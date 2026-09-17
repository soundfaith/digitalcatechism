/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f7f8f4',
        parchment: '#e9e4df',
        cream: '#ece9dc',
        slate: '#e9e4df',
        ink: '#17201d',
        forest: '#17201d',
        moss: '#6f6a66',
        clay: '#d96c4f',
        coral: '#d96c4f',
        sun: '#e8b84c',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"DM Serif Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
