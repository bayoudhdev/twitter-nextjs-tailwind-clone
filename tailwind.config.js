/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors : {
        twitter: '#00ADED',
        light_twitter: 'rgba(118,209,243,0.34)'
      }
    },
  },
  plugins: [],
}
