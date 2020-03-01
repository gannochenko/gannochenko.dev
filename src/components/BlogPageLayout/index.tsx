import React, { useMemo } from 'react';
import { graphql } from 'gatsby';
// @ts-ignore
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';
const shortcodes = { Link }; // Provide common components here
// @ts-ignore
export default function PageTemplate(props) {
    const {
        data: { mdx },
    } = props;

    console.log('fm:');
    console.log(mdx.frontmatter);

    const pageContext = useMemo(
        () => ({
            frontmatter: mdx.frontmatter,
        }),
        [mdx.id],
    );

    return (
        <MDXProvider components={shortcodes}>
            <MDXRenderer pageContext={pageContext}>{mdx.body}</MDXRenderer>
        </MDXProvider>
    );
}

export const pageQuery = graphql`
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
