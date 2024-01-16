/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': {
          '68': 'rgba(58, 56, 56, 0.68)', 
        },
        'blue': '#4285F4',
          'green': '#34AB53',
          'red': '#EA4335',
          'yellow': '#FBBC05', 
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark"],
  }
}

