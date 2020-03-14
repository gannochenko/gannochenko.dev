import React, { FunctionComponent } from 'react';

import { BlogPostCard } from '../BlogPostCard';
import { BlogPostListContainer } from './style';
import { Props } from './type';

export const BlogPostList: FunctionComponent<Props> = ({ data }) => {
    console.log(data);

    return (
        <BlogPostListContainer>
            {data.map(item => (
                <BlogPostCard key={item.node.id} data={item} />
            ))}
        </BlogPostListContainer>
    );
};
