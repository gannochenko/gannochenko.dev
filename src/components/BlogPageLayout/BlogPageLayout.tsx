import React, { FunctionComponent, useMemo } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Props } from './type';
import { LayoutInner } from '../LayoutInner';
import { BlogPostPageContainer } from './components/BlogPostPageContainer';
import { BlogPostHeader } from './components/BlogPostHeader';

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
    const location = useMemo(() => ({ pathname: path }), [path]);

    return (
        <LayoutInner
            pageContext={pageContext}
            location={location}
            showTitle={false}
        >
            <BlogPostHeader data={pageContext} />
            <BlogPostPageContainer>
                <MDXRenderer pageContext={pageContext}>{mdx.body}</MDXRenderer>
            </BlogPostPageContainer>
        </LayoutInner>
    );
};

export const blogPageQuery = graphql`
    query BlogPostQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                title
                date
                images {
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
                    isCover
                    galleryId
                }
            }
        }
    }
`;

export default BlogPageLayout;
