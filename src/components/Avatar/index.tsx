import React from 'react';
import { Container, Image } from './style';
import { StaticQuery, graphql } from 'gatsby';

export const Avatar = () => {
    return (
        <StaticQuery
            query={graphql`
                query {
                    file(relativePath: { eq: "avatar.jpg" }) {
                        childImageSharp {
                            sizes(maxWidth: 200, quality: 80) {
                                ...GatsbyImageSharpSizes
                            }
                        }
                    }
                }
            `}
            render={data => (
                <Container>
                    <Image sizes={data.file.childImageSharp.sizes} />
                </Container>
            )}
        />
    );
};
