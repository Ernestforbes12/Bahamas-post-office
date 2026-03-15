/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a1628',
        teal: '#00b4a0',
        'teal-light': '#00d4bc',
        'teal-dim': 'rgba(0, 180, 160, 0.15)',
        gold: '#f0a500',
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}