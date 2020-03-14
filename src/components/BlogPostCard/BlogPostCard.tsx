import React, { FunctionComponent, useMemo } from 'react';

import { BlogPostCardContainer, Image, Data } from './style';
import { Props } from './type';
import { Link } from '../Link';

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
                <Link href="/">Read more</Link>
            </Data>
        </BlogPostCardContainer>
    );
};
