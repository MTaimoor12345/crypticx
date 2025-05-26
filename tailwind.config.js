/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          light: '#2c3e6e',  // Lighter blue for light mode
          DEFAULT: '#1f2a48',  // Original primary
          dark: '#1a223d',    // Darker shade for hover states
        },
        // Secondary/Accent colors
        secondary: {
          light: '#4f8bf9',  // Lighter blue for light mode
          DEFAULT: '#3b82f6', // Original secondary
          dark: '#2563eb',    // Darker shade for hover states
        },
        // Background colors
        background: {
          light: '#f8fafc',  // Very light gray for light mode background
          dark: '#0f172a',   // Dark blue-gray for dark mode
        },
        // Text colors
        text: {
          primary: '#1e293b',   // Dark gray for light mode text
          secondary: '#475569', // Lighter gray for secondary text
          light: '#f8fafc',    // Light text for dark mode
        },
        // Card/Container colors
        card: {
          light: '#ffffff',  // White for light mode cards
          dark: '#1e293b',   // Dark blue-gray for dark mode cards
        },
        // Border colors
        border: {
          light: '#e2e8f0',  // Light gray border for light mode
          dark: '#334155',    // Darker border for dark mode
        },
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'light': '#f8fafc',  // Light mode background
        'dark': '#0f172a',   // Dark mode background
      }),
      textColor: theme => ({
        ...theme('colors'),
        'primary': '#1e293b',   // Primary text color
        'secondary': '#475569', // Secondary text color
      }),
      borderColor: theme => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.200', 'currentColor'),
        'light': '#e2e8f0',
        'dark': '#334155',
      }),
      backgroundImage: {
        'blue-gradient': 'linear-gradient(90deg, #2c3e6e 0%, #1f2a48 100%)',
        'blue-gradient-radial': 'radial-gradient(circle at 50% 50%, #2c3e6e 0%, #1f2a48 100%)',
        'light-gradient': 'linear-gradient(90deg, #f8fafc 0%, #e2e8f0 100%)',
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