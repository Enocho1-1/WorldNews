/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        open_sans: ["Open Sans", "sans-serif"],
      },
      colors:{
        orange_red:"#ff4500",
        dark_orange:"#cc3700"
      }
    },
  },
  plugins: [],
}

