require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `The Fearless | Melbourne's Creative Agency.`,
    description: `The Fearless is a Creative Agency based in Melbourne specialised in creating breathtaking user expereinces through bespoke digital engineering solutions.`,
    author: `Deep Lalwani`,
    socials: {
      linkedIn: "https://www.linkedin.com/company/the-fearless/",
      facebook: "https://www.facebook.com/The-Fearless-102939108131461",
      instagram: "https://www.instagram.com/thefearlessau/"
    },
    siteUrl: `https://www.thefearless.com.au`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
    },
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
    'gatsby-plugin-offline',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fearless-favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
