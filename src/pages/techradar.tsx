import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import { SEO, Layout } from '../components';

import { BlockRenderer } from '../lib/block-renderer';
import { Node } from '../lib/type';

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
            <SEO title="Tech radar" keywords={['']} />
            {BlockRenderer.render(nodes)}
        </Layout>
    );
};

export const query = graphql`
    query SuperPowersPageQuery {
        allMarkdownRemark(
            sort: { fields: frontmatter___sort, order: ASC }
            filter: { frontmatter: { pathname: { eq: "/techradar/" } } }
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
