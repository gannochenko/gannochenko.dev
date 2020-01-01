import React, { FunctionComponent } from 'react';
import { graphql, Link } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

import { BlockRenderer } from '../lib/block-renderer';
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
        <Layout shortHeader={false}>
            <Link to="/techradar/">Techradar!</Link>
            <SEO title="Home" keywords={['']} />
            {BlockRenderer.render(nodes)}
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
