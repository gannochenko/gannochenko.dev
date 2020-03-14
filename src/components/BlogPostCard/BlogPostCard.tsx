import React, { FunctionComponent, useMemo } from 'react';

import {
    BlogPostCardContainer,
    Image,
    Data,
    LinkContainer,
    ViewPost,
} from './style';
import { Props } from './type';
import { Typography } from '../Typography';

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
                <Typography sub>{data.node.frontmatter.title}</Typography>
                <LinkContainer>
                    <ViewPost href="/">Read more</ViewPost>
                </LinkContainer>
            </Data>
        </BlogPostCardContainer>
    );
};
