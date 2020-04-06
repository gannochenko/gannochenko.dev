import React, { FunctionComponent, useMemo } from 'react';

import {
    BlogPostCardContainer,
    Image,
    Data,
    LinkContainer,
    ViewPost,
    Title,
    Date,
    TitleLink,
} from './style';
import { Props } from './type';
import { formatDate } from '../../lib/util';
import { Link } from 'gatsby';

export const BlogPostCard: FunctionComponent<Props> = ({ data }) => {
    const image = useMemo(() => {
        return (
            data.node.frontmatter.images.find((image: any) => image.is_cover) ||
            {}
        );
    }, [data]);

    const url = data.node.frontmatter.path;

    return (
        <BlogPostCardContainer>
            <Link to={url}>
                <Image sizes={image.image.childImageSharp.fluid} />
            </Link>
            <Data>
                <Title>
                    <TitleLink to={url}>
                        {data.node.frontmatter.title}
                    </TitleLink>
                </Title>
                <LinkContainer>
                    <Date>{formatDate(data.node.frontmatter.date)}</Date>
                    <ViewPost to={url} fontSize="small">
                        Read the post
                    </ViewPost>
                </LinkContainer>
            </Data>
        </BlogPostCardContainer>
    );
};
