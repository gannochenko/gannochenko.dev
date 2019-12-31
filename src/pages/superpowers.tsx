import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import { SEO, Skills, Layout, Container } from '../components';

import { BlockRenderer } from '../lib/block-renderer';
import { Node } from '../lib/type';
import { main, rest } from '../skills/skills';

interface Props {
    data: {
        allMarkdownRemark: {
            nodes: Node[];
        };
    };
}

const SuperPowersPage: FunctionComponent<Props> = ({ data = {} }) => {
    const { allMarkdownRemark: { nodes = [] } = {} } = data;

    return (
        <Layout shortHeader>
            <SEO title="Super powers" keywords={['']} />
            {BlockRenderer.render(nodes)}
            {/*<Container type="wide">*/}
            {/*    <Skills data={main} />*/}
            {/*    <Skills data={rest} />*/}
            {/*</Container>*/}
        </Layout>
    );
};

export const query = graphql`
    query SuperPowersPageQuery {
        allMarkdownRemark(
            sort: { fields: frontmatter___sort, order: ASC }
            filter: { frontmatter: { pathname: { eq: "/superpowers/" } } }
        ) {
            nodes {
                id
                html
                rawMarkdownBody
                frontmatter {
                    graphics {
                        author
                        source
                        sourceText
                    }
                }
            }
        }
    }
`;

export default SuperPowersPage;
