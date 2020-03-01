module.exports = {
    // pathPrefix: '/gannochenko',
    siteMetadata: {
        title: 'Gannochenko',
        description: 'Gannochenko gatsby starter',
        author: '@awesome1888',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                defaultLayouts: {
                    // posts: require.resolve("./src/components/posts-layout.js"),
                    default: require.resolve(
                        './src/components/Layout/index.tsx',
                    ),
                },
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1035,
                            sizeByPixelDensity: true,
                        },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'graphics',
                path: `${__dirname}/static/assets`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/content/blog`,
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {},
                    },
                ],
            },
        },
        'gatsby-plugin-netlify-cms',
        // {
        //     resolve: 'gatsby-plugin-manifest',
        //     options: {
        //         name: 'gatsby-starter-default',
        //         short_name: 'starter',
        //         start_url: '/',
        //         background_color: '#663399',
        //         theme_color: '#663399',
        //         display: 'minimal-ui',
        //         // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
        //     },
        // },
        'gatsby-plugin-styled-components',
        'gatsby-plugin-typescript',
        'gatsby-plugin-catch-links',
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        // 'gatsby-plugin-offline',
    ],
};
