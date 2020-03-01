import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

import { FontSize } from '../type';
import { EffectsSupported } from '../lib/effects';

interface Graphics {
    source?: string;
    author?: string;
    image: any;
}

interface Node {
    id: string;
    html: string;
    frontmatter: {
        graphics: Graphics[];
        widget: 'StandardBlock' | 'AccentBlock' | 'QuoteBlock';
        fontSize: FontSize;
        effect?: EffectsSupported;
        effectTimeout?: number;
    };
}

interface Data {
    allMarkdownRemark: {
        nodes: Node[];
    };
}

interface Props {
    data: Data;
}

const HomePage: FunctionComponent<Props> = ({ data }) => {
    const { allMarkdownRemark: { nodes = [] } = {} } = data;

    console.log(nodes);

    return (
        <Layout>
            <SEO title="Home" keywords={['']} />
        </Layout>
    );
};

export const query = graphql`
    query HomePageQuery {
        allMarkdownRemark {
            nodes {
                id
                html
                frontmatter {
                    graphics {
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
                    }
                }
            }
        }
    }
`;

export default HomePage;
