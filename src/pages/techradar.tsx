import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import { Layout, BlockRenderer, SEO } from '../components';

import { Node } from '../lib/type';

interface Props {
    data: {
        allMarkdownRemark: {
            nodes: Node[];
        };
    };
}

const TechRadarPage: FunctionComponent<Props> = ({ data = {} }) => {
    const { allMarkdownRemark: { nodes = [] } = {} } = data;

    return (
        <Layout shortHeader>
            <SEO title="Tech radar" keywords={['']} />
            <BlockRenderer nodes={nodes} />
        </Layout>
    );
};

export const query = graphql`
    query TechRadarPageQuery {
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

export default TechRadarPage;
