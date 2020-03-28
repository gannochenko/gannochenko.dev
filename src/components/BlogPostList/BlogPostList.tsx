import React, { FunctionComponent } from 'react';

import { BlogPostCard } from '../BlogPostCard';
import { BlogPostListContainer, Item } from './style';
import { Props } from './type';

export const BlogPostList: FunctionComponent<Props> = ({ data }) => {
    console.log('data');
    console.log(data);
    return (
        <BlogPostListContainer>
            {data.map(item => (
                <Item key={item.node.id}>
                    <BlogPostCard data={item} />
                </Item>
            ))}
        </BlogPostListContainer>
    );
};
