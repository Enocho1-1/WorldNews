/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        open_sans: ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"]
      },
      colors:{
        orange_red:"#e63e00",
        dark_orange:"#cc3700",
        vivid_cyan: "#18b9d2",
        light_cyan:"#67e8f9",
        pure_green: "#7ac900",
        bright_blue: "#2563eb",
        pure_yellow: "#e6e600",
        pure_gray: "#a9a9a9",
        moderate_violet: "#5b2eb7"
      },
      gridTemplateColumns:{
        // Simple 8 column grid
        'eightcols': 'repeat(8, minmax(0, auto))',
        // Simple 4 column grid
        'fourcols': 'repeat(4, minmax(0, auto))',
        // Simple 3 column grid
        'threecols': 'repeat(3, minmax(0, auto))',
        // Simple 2 column grid
        'twocols': 'repeat(2, minmax(0, auto))'
      }
    },
  },
  plugins: [],
}

