import React, { FunctionComponent } from 'react';
import { graphql, Link } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

import { StandardBlock } from '../components/StandardBlock';
import { AccentBlock } from '../components/AccentBlock';
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
    rawMarkdownBody: string;
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

const getWidget = (node: Node) => {
    const { frontmatter: { widget = '' } = {} } = node;
    if (widget === 'AccentBlock') {
        return AccentBlock;
    }

    return StandardBlock;
};

const SuperPowersPage: FunctionComponent<Props> = ({ data = {} }) => {
    const { allMarkdownRemark: { nodes = [] } = {} } = data;

    return (
        <Layout shortHeader>
            <SEO title="SuperPowers" keywords={['']} />
            <Link to="/">Back</Link>
            {nodes.map(node => {
                const Widget = getWidget(node);
                return (
                    // @ts-ignore
                    <Widget
                        key={node.id}
                        html={node.html}
                        md={node.rawMarkdownBody}
                        {...node.frontmatter}
                    />
                );
            })}
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
