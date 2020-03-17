import React, { FunctionComponent, useMemo } from 'react';

import { BlogPostHeaderContainer, Cover } from './style';
import { Props } from './type';

export const BlogPostHeader: FunctionComponent<Props> = ({ data }) => {
    const headerImage = useMemo(() => {
        return data.frontmatter.images.find((image: any) => image.isCover);
    }, [data]);

    const { title, date } = data.frontmatter;

    console.log(title);
    console.log(date);

    return (
        <BlogPostHeaderContainer>
            <Cover sizes={headerImage.image.childImageSharp.fluid} />
        </BlogPostHeaderContainer>
    );
};
