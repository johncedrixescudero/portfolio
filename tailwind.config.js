/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./dist/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '640px'},   // max-width: 639px
        'md': {'max': '768px'},   // max-width: 767px
        'lg': {'max': '1024px'},  // max-width: 1023px
        'xl': {'max': '1280px'},  // max-width: 1279px
        '2xl': {'max': '1536px'}, // max-width: 1535px
        // Define your own breakpoints here as maximum widths
      },
    },
  },
  plugins: [
   
  ],
}

