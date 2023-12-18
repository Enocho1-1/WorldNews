/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        open_sans: ["Open Sans", "sans-serif"],
      },
      colors:{
        orange_red:"#e63e00",
        dark_orange:"#cc3700",
        vivid_cyan: "#18b9d2",
        pure_green: "#7ac900",
        bright_blue: "#2563eb",
        pure_yellow: "#e6e600",
        pure_gray: "#a9a9a9",
        moderate_violet: "#5b2eb7"
      }
    },
  },
  plugins: [],
}

