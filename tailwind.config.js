/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "'IBM Plex Serif'",
      },
      gridTemplateAreas: {
        layout: [
          "nickname date time",
          "trade     .   parity",
          "search search search",
          "links links links",
        ],
      },
      gridTemplateColumns: {
        layout: "1fr 1fr 1fr",
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
};
