/* eslint-disable @typescript-eslint/camelcase */

module.exports = {
    // pathPrefix: '/gannochenko',
    siteMetadata: {
        title: 'Gannochenko',
        description:
            'My name is Sergei, I am a full-stack software engineer in JavaScript / JavaScript domain, open-source contributor, in ❤️ with tech.',
        author: '@gannochenko',
        keywords: ['blog', 'it', 'tech', 'javascript', 'software'],
        siteUrl: 'https://gannochenko.dev',
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
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
                        },
                    },
                ],
            },
        },
        'gatsby-plugin-netlify-cms',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Gannochenko Blog',
                short_name: 'Gannochenko',
                description: 'Sergei Gannochenko personal blog',
                start_url: '/',
                background_color: '#fff',
                theme_color: '#333',
                display: 'minimal-ui',
                categories: ['business', 'education', 'lifestyle', 'news'], // https://github.com/w3c/manifest/wiki/Categories
                icon: 'static/icon.png', // This path is relative to the root of the site.
                cache_busting_mode: 'none',
            },
        },
        'gatsby-plugin-styled-components',
        'gatsby-plugin-typescript',
        'gatsby-plugin-catch-links',
        {
            resolve: 'gatsby-plugin-offline',
            options: {
                workboxConfig: {
                    globPatterns: ['**/*'],
                },
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: 'UA-162152239-1',
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                // exclude: ["/preview/**", "/do-not-track/me/too/"],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Enables Google Optimize using your container Id
                // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
                // Enables Google Optimize Experiment ID
                // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
                // Set Variation ID. 0 for original 1,2,3....
                // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
                // Any additional optional fields
                // sampleRate: 5,
                // siteSpeedSampleRate: 10,
                // cookieDomain: "example.com",
            },
        },
        'gatsby-plugin-sitemap',
    ],
};
