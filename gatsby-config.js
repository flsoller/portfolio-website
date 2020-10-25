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
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto"],
        },
      },
    },
  ],
}
