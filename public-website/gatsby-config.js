const dotenv = require("dotenv").config()

module.exports = {
  siteMetadata: {
    author: `Justine Hell & Kevin Fabre`,
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
  ],
}
