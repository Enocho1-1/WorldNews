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
        dark_orange:"#cc3700",
        vivid_cyan: "#1fcae5",
        pure_green: "#89e200",
        bright_blue: "#2563eb",
        pure_yellow: "#ffff00",
        pure_gray: "#a9a9a9",
        moderate_violet: "#7447d1"
      }
    },
  },
  plugins: [],
}

