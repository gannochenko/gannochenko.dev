import React from 'react';
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
    console.log(mdx.frontmatter);

    return (
        <MDXProvider components={shortcodes}>
            <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
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
            }
        }
    }
`;
