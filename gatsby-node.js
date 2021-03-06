/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { introspectionQuery, graphql, printSchema } = require('gatsby/graphql');
const write = require('write');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const path = require('path');

/**
 * Generate GraphQL schema.json file to be read by tslint
 * Thanks: https://gist.github.com/kkemple/6169e8dc16369b7c01ad7408fc7917a9
 */
exports.onPostBootstrap = async ({ store }) => {
    try {
        const { schema } = store.getState();
        const jsonSchema = await graphql(schema, introspectionQuery);
        const sdlSchema = printSchema(schema);

        write.sync('schema.json', JSON.stringify(jsonSchema.data), {});
        write.sync('schema.graphql', sdlSchema, {});

        console.log('\n\n[gatsby-plugin-extract-schema] Wrote schema\n'); // eslint-disable-line
    } catch (error) {
        console.error(
            '\n\n[gatsby-plugin-extract-schema] Failed to write schema: ',
            error,
            '\n',
        );
    }
};

exports.onCreateNode = ({ node }) => {
    fmImagesToRelative(node);
};

exports.createPages = ({ graphql, actions }) => {
    return new Promise((resolve, reject) => {
        resolve(
            graphql(`
                query CreatePagesQuery {
                    allMdx {
                        edges {
                            node {
                                id
                                frontmatter {
                                    path
                                    published
                                }
                            }
                        }
                    }
                }
            `).then(result => {
                if (result.errors) {
                    console.error(result.errors);
                    reject(result.errors);
                }

                const entries = result.data.allMdx.edges;
                if (!entries) {
                    return;
                }

                entries.forEach(({ node }) => {
                    const {
                        frontmatter: { path: pathProperty, published },
                    } = node;

                    let realPath = '';
                    let componentPath = null;
                    if (pathProperty.startsWith('/blog')) {
                        realPath = published
                            ? pathProperty
                            : pathProperty.replace(
                                  /^\/blog\//,
                                  '/blog-drafts/',
                              );
                        componentPath = path.resolve(
                            './src/components/BlogPageLayout/BlogPageLayout.tsx',
                        );
                    } else if (pathProperty.startsWith('/projects')) {
                        realPath = pathProperty;
                        componentPath = path.resolve(
                            './src/components/ProjectDetailsPageLayout/ProjectDetailsPageLayout.tsx',
                        );
                    } else {
                        console.error(
                            `There is an entry, but I cant create a page for it: ${pathProperty}`,
                        );
                        return;
                    }

                    actions.createPage({
                        // Encode the route
                        path: realPath,
                        // Layout for the page
                        component: componentPath,
                        // Values defined here are injected into the page as props and can
                        // be passed to a GraphQL query as arguments
                        context: {
                            id: node.id,
                        },
                    });
                });
            }),
        );
    });
};

exports.onCreateWebpackConfig = ({
    stage,
    // rules,
    // loaders,
    plugins,
    actions,
}) => {
    actions.setWebpackConfig({
        plugins: [
            plugins.define({
                __DEV__: stage === `develop` || stage === `develop-html`,
            }),
        ],
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        },
    });
};
