module.exports = {
    // pathPrefix: '/gannochenko',
    siteMetadata: {
        title: 'Gannochenko',
        description: 'Gannochenko gatsby starter',
        author: '@awesome1888',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
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
                name: `blog`,
                path: `${__dirname}/content/blog`,
            },
        },
        'gatsby-transformer-sharp',
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-relative-images`,
                        options: {
                            name: 'graphics',
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {},
                    },
                ],
            },
        },
        // {
        //     resolve: `gatsby-plugin-mdx`,
        //     options: {
        //         extensions: [`.mdx`, `.md`],
        //         defaultLayouts: {
        //             // posts: require.resolve("./src/components/posts-layout.js"),
        //             default: require.resolve(
        //                 './src/components/Layout/index.tsx',
        //             ),
        //         },
        //         gatsbyRemarkPlugins: [
        //             {
        //                 resolve: `gatsby-remark-images`,
        //                 options: {
        //                     maxWidth: 1035,
        //                     sizeByPixelDensity: true,
        //                 },
        //             },
        //             {
        //                 resolve: `gatsby-transformer-remark`,
        //                 options: {
        //                     plugins: [
        //                         {
        //                             resolve: `gatsby-remark-relative-images`,
        //                             options: {
        //                                 name: 'graphics',
        //                             },
        //                         },
        //                         {
        //                             resolve: `gatsby-remark-images`,
        //                             options: {},
        //                         },
        //                     ],
        //                 },
        //             },
        //         ],
        //     },
        // },
        'gatsby-plugin-netlify-cms',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-typescript',
        'gatsby-plugin-catch-links',
    ],
};
