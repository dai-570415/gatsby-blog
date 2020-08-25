module.exports = {
  siteMetadata: {
    title: `Gatsby Blog`,
    description: `This is Gatsby Blog.`,
    author: `@dai-designing`,
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
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        // spaceId: process.env.CONTENTFUL_SPACE_ID,
        // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: `YourKey`,
        accessToken: `YourKey`,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "YourKey",
          authDomain: "YourKey",
          databaseURL: "YourKey",
          projectId: "YourKey",
          storageBucket: "YourKey",
          messagingSenderId: "YourKey",
          appId: "YourKey",
          measurementId: "YourKey"
        }
      }
    }
  ],
}
