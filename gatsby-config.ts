import type { GatsbyConfig } from "gatsby";
import adapter from "gatsby-adapter-netlify";

const config: GatsbyConfig = {
  adapter: adapter({
    excludeDatastoreFromEngineFunction: false,
  }),
  flags: {
    DEV_SSR: false, // switch when errors in console are encountered
  },
  siteMetadata: {
    title: `aerf.io`,
    siteUrl: `https://aerf.io`,
    author: `Mateusz Puczyński`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: false,
  trailingSlash: "always",
  plugins: [
    "gatsby-plugin-pnpm",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-use-dark-mode",
      options: {
        classNameDark: "dark",
        classNameLight: "light",
        storageKey: "darkMode",
        minify: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mateusz Puczyński's personal site`,
        short_name: `aerf.io`,
        start_url: `/`,
        background_color: `#e37fad`,
        theme_color: `#e37fad`,
        display: `minimal-ui`,
        icon: `src/assets/custom-logo.png`, // This path is relative to the root of the site.
        theme_color_in_head: false,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `IBM Plex Serif`,
            file: `https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@400;500;700&display=swap`,
          },
        ],
      },
    },
  ],
};

export default config;
