const dotenv = require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `La-Terre-du-Milieu`,
    description: `Chambre d'hôtes insolite, plongez dans l'univers Tolkien !`,
    author: `Justine Hell & Kevin Fabre`,
  },
  plugins: [
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
        dataset: "development",
        watchMode: true, // when making a change in sanity CMS and save, it will automatically be updated inside gatsby, real time editing experience (no need to rebuild)
        token: process.env.SANITY_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: { tailwind: true },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
