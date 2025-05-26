/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1f2a48',
        'primary-light': '#22315a',
        secondary: '#3b82f6',
        'secondary-dark': '#2563eb',
        'indigo-dark': '#232946',
        'blue-gradient-from': '#22315a',
        'blue-gradient-to': '#232946',
        dark: '#181c2a',
        'dark-light': '#232946',
        'dark-lighter': '#2a3350',
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(90deg, #22315a 0%, #232946 100%)',
        'blue-gradient-radial': 'radial-gradient(circle at 50% 50%, #22315a 0%, #232946 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-delay': 'fadeIn 0.5s ease-in-out 0.2s',
        'fade-in-delay-2': 'fadeIn 0.5s ease-in-out 0.4s',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}