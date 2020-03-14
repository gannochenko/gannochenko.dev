module.exports = {
    // pathPrefix: '/gannochenko',
    siteMetadata: {
        title: 'Gannochenko',
        description: 'Sergei Gannochenko`s blog',
        author: '@gannochenko',
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/static/assets`,
            },
        },
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         name: `markdown-pages`,
        //         path: `${__dirname}/content/md`,
        //     },
        // },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/content/blog`,
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-relative-images`,
                        options: {
                            name: 'images',
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {},
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                defaultLayouts: {
                    default: require.resolve(
                        './src/components/LayoutInner/LayoutInner.tsx',
                    ),
                },
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-relative-images`,
                        options: {
                            name: 'images',
                        },
                    },
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
        'gatsby-plugin-netlify-cms',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-styled-components',
        'gatsby-plugin-typescript',
        'gatsby-plugin-catch-links',
    ],
};
