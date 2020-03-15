import React, { FunctionComponent, useMemo } from 'react';

import {
    BlogPostCardContainer,
    Image,
    Data,
    LinkContainer,
    ViewPost,
    Title,
    Date,
} from './style';
import { Props } from './type';

export const BlogPostCard: FunctionComponent<Props> = ({ data }) => {
    const image = useMemo(() => {
        return (
            data.node.frontmatter.images.find((image: any) => image.isCover) ||
            {}
        );
    }, [data]);

    return (
        <BlogPostCardContainer>
            <Image sizes={image.image.childImageSharp.fluid} />
            <Data>
                <Title>{data.node.frontmatter.title}</Title>
                <LinkContainer>
                    <Date>{data.node.frontmatter.date}</Date>
                    <ViewPost href={data.node.frontmatter.path}>
                        Read the post
                    </ViewPost>
                </LinkContainer>
            </Data>
        </BlogPostCardContainer>
    );
};
