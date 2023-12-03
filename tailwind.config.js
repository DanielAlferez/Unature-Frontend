/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: "#002D30",
        lightGreen: "#96D9C6",
        darkRed: "#B32D28",
        lightRed: "#EF4339",
        whiteGreen: "#F6FFF9"
      },
      keyframes: {
        bounceY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(15px)' }, 
        },
      },
      animation:{
        'bounce-y': 'bounceY 4000ms linear infinite', 
      }
    },
  },
  plugins: [],
}

