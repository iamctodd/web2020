module.exports = {
  siteMetadata: {
    title: `Data Nerd. Design geek. Product Fanatic! — C. Todd Lombardo`,
    description: `C Todd Lombardo's personal site`,
    author: `@iamctodd`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
