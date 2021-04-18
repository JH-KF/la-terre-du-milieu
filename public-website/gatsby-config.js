const dotenv = require("dotenv").config()

module.exports = {
  siteMetadata: {
    website: "www.laterredumilieu.com",
    websiteName: "La terre du milieu",
    fr: {
      author: `Monique et Marial Bousch`,
    },
    en: {
      author: `Monique and Marial Bousch`,
    },
    de: {
      author: `Monique und Marial Bousch`,
    }
   
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: "351nji64",
        dataset: process.env.NODE_ENV === "development" ? "development" : "production",
        // when making a change in sanity CMS and save, it will automatically be updated inside gatsby, real time editing experience (no need to rebuild)
        watchMode: process.env.NODE_ENV === "development" ? true : false,
        token: process.env.SANITY_TOKEN,
        apiVersion: '2021-03-28'
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chambres d'hôte | La terre du milieu`,
        short_name: `La terre du milieu`,
        start_url: `/`,
        lang: `fr`,
        background_color: `#ffffff`,
        theme_color: `#6D542C`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        localize: [
          {
            start_url: `/en/`,
            lang: `en`,
            name: `Guest rooms | La terre du milieu`,
            short_name: `La terre du milieu`,
            description: `Die Anwendung macht coole Dinge und macht Ihr Leben besser.`,
          },
        ],
      },
    },
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-E06DVTWCBR", // Google Analytics / GA
          ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    }
  ],
}
