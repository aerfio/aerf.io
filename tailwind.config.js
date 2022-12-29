/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
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
          "footer footer footer",
        ],
        phone: ["nickname", "intro", "about", "footer"],
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
        primarydark: "#e37fad",
        secondarydark: "#282c35",
        primarylight: "#282c35",
        secondarylight: "#ebdbb2",
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
