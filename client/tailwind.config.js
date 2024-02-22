/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        'test':"url('C:/Users/JBH/Desktop/tailwind/src/assets/20912_cover.jpg')"
      },
      screens: {
        xl: '1540px',
      },
    },
  },
  plugins: [],
}

