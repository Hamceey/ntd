/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-tide-blue': '#0B4E8C',
        'data-flow-cyan': '#00B4D8',
        'quantum-gold': '#F9A825',
        'vibrant-green': '#25D366',
        'accent-black': '#2A2A2A',
        'neutral-gray': '#F0F0F0',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}