import React, { FunctionComponent } from 'react';
import { graphql, Link } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

import { BlockRenderer } from '../lib/block-renderer';
import { Node } from '../lib/type';
import { Container } from '../components/Container';

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
            <Link to="/superpowers/">Superpowers!!!</Link>
            <SEO title="Home" keywords={['']} />
            <Container type="wide">
                My name is Sergei, I am a full-stack software engineer in the
                JavaScript domain with 10+ years of development experience. I
                have a Master’s in Math. I am a passionate learner, in deep love
                with what I do for a living. And here is more :)
            </Container>
            <Container type="standard">
                My name is Sergei, I am a full-stack software engineer in the
                JavaScript domain with 10+ years of development experience. I
                have a Master’s in Math. I am a passionate learner, in deep love
                with what I do for a living. And here is more :)
            </Container>
            <Container type="narrow">
                My name is Sergei, I am a full-stack software engineer in the
                JavaScript domain with 10+ years of development experience. I
                have a Master’s in Math. I am a passionate learner, in deep love
                with what I do for a living. And here is more :)
            </Container>
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
