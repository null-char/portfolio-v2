const path = require("path")

module.exports = {
    siteMetadata: {
        title: `Sooryakiran Ponnath | Fullstack Developer`,
        description: `Portfolio site`,
        author: `@nullchar`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/src/assets`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true,
                jsxPragma: `jsx`,
                allExtensions: true,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `sooryakiran-ponnath-portfolio`,
                short_name: `portfolio`,
                start_url: `/`,
                background_color: `#11141A`,
                theme_color: `#11D4ED`,
                display: `standalone`,
                icon: `src/assets/favicon-32x32.png`,
            },
        },
        `gatsby-plugin-gatsby-cloud`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-root-import`,
            options: {
                components: path.join(__dirname, "src/components"),
                pages: path.join(__dirname, "src/pages"),
                assets: path.join(__dirname, "src/assets"),
                themes: path.join(__dirname, "src/themes"),
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
