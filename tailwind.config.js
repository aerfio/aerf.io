/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'IBM Plex Serif'", ...defaultTheme.fontFamily.sans],
      },
      // https://savvywombat.com.au/tailwind-css/grid-areas/
      gridTemplateAreas: {
        desktop: [
          "nickname . .",
          "intro     intro   intro",
          "about about about",
        ],
        phone: ["nickname nickname", "intro  intro", "about  about"],
      },
      gridTemplateColumns: {
        desktop: "1fr 1fr 1fr",
        phone: "3fr 2fr",
      },
      gridTemplateRows: {
        layout: `150px
                 auto
                 `,
      },
      colors: {
        aerfiopink: "#e37fad",
        aerfiogrey: "#282c35",
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
  variants: {
    gridTemplateAreas: ["responsive"],
    gridTemplateColumns: ["responsive"],
    gridTemplateRows: ["responsive"],
  },
};
