/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',          
        'sm': '425px',          
        'lsm': '576px',          
        'xlg': '991px',       
      },
    },
  },
  plugins: [],
}

