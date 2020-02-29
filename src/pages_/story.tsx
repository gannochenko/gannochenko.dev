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

const StoryPage: FunctionComponent<Props> = ({ data = {} }) => {
    const { allMarkdownRemark: { nodes = [] } = {} } = data;

    return (
        <Layout shortHeader title="The Entire Story" backURL="/">
            <SEO title="The Entire Story" keywords={['']} />
            <BlockRenderer nodes={nodes} />
        </Layout>
    );
};

export const query = graphql`
    query StoryPageQuery {
        allMarkdownRemark(
            sort: { fields: frontmatter___sort, order: ASC }
            filter: { frontmatter: { pathname: { eq: "/story/" } } }
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

export default StoryPage;
