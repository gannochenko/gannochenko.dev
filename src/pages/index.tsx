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

const HomePage: FunctionComponent<Props> = ({ data = {} }) => {
    const { allMarkdownRemark: { nodes = [] } = {} } = data;

    return (
        <Layout>
            <SEO title="Home" keywords={['']} />
            111111
            <BlockRenderer nodes={nodes} />
        </Layout>
    );
};

export const query = graphql`
    query HomePageQuery {
        allMarkdownRemark(
            sort: { fields: frontmatter___sort, order: ASC }
            filter: { frontmatter: { pathname: { eq: "/" } } }
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

export default HomePage;
