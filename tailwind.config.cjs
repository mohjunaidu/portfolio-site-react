/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f9ff',
          100: '#eaf2ff',
          500: '#4C8BF5',
          700: '#366ed6'
        }
      },
      backgroundImage: {
        'hero-grad': 'linear-gradient(180deg,#0f1724 0%, #020617 100%)',
      }
    },
  },
  plugins: [],
}

