/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  // Build
  pathPrefix: "/website-templates",

  // Plugins
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto\:300,500,700`],
        display: "swap",
      },
    },
  ],
}
