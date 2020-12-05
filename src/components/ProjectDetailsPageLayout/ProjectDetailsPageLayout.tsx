import React, { FunctionComponent, useMemo } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Props } from './type';
import { LayoutInner } from '../LayoutInner';
import { ProjectDetailsPageContainer } from './components/ProjectDetailsPageContainer';
// import { BlogPostHeader } from './components/BlogPostHeader';
import { Link } from '../Link';
import { Container } from '../Container';
import { ProjectDetails } from './style';

export const ProjectDetailsPageLayout: FunctionComponent<Props> = ({
    data: { mdx },
    path,
}) => {
    const location = useMemo(() => ({ pathname: path }), [path]);

    return (
        <LayoutInner pageContext={mdx} location={location} showTitle={false}>
            <ProjectDetails>
                {/*<BlogPostHeader data={mdx} />*/}
                <ProjectDetailsPageContainer>
                    <MDXRenderer pageContext={mdx}>{mdx.body}</MDXRenderer>
                    <Container>
                        <Link to="/projects">&larr; Back to list</Link>
                    </Container>
                </ProjectDetailsPageContainer>
            </ProjectDetails>
        </LayoutInner>
    );
};

export const projectDetailsPageQuery = graphql`
    query ProjectDetailsPageQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                title
                date
                keywords
                description
                published
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
                    is_cover
                    galleryId
                }
            }
        }
    }
`;

export default ProjectDetailsPageLayout;
