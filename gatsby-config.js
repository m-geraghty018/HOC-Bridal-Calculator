/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: `HOC Resources`,  // Added site title
  },
  plugins: [
    `gatsby-plugin-react-helmet`,  // Enables support for managing document head
    {
      resolve: `gatsby-source-filesystem`,  // Allows Gatsby to load data from the filesystem
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,  // Adds image processing functionalities
    `gatsby-plugin-sharp`,  // Image processing plugin
    {
      resolve: `gatsby-plugin-manifest`,  // Configures a web app manifest
      options: {
        name: `HOC Resources`,
        short_name: `HOC`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,  // Replace with the correct path to your icon file
      },
    },
    `gatsby-plugin-gatsby-cloud`,  // Adds support for Gatsby Cloud
  ],
}
