import React, { FunctionComponent, useMemo } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Props } from './type';
import { Layout } from '../Layout';

export const BlogPageLayout: FunctionComponent<Props> = ({
    data: { mdx },
    path,
}) => {
    const pageContext = useMemo(
        () => ({
            frontmatter: mdx.frontmatter,
        }),
        [mdx.id],
    );

    return (
        <Layout pageContext={pageContext} path={path}>
            <MDXRenderer pageContext={pageContext}>{mdx.body}</MDXRenderer>
        </Layout>
    );
};

export const blogPageQuery = graphql`
    query BlogPostQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                title
                graphics {
                    image {
                        childImageSharp {
                            fluid(maxWidth: 1240, quality: 80) {
                                ...GatsbyImageSharpFluid_tracedSVG
                            }
                        }
                    }
                    author
                    source
                    sourceText
                }
            }
        }
    }
`;

export default BlogPageLayout;
