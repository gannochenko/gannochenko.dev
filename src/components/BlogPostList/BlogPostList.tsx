import React, { FunctionComponent } from 'react';

import { BlogPostCard } from '../BlogPostCard';
import { BlogPostListContainer, Items, Item, LinkContainer } from './style';
import { Props } from './type';
import { Link } from '../Link';

export const BlogPostList: FunctionComponent<Props> = ({ data, showLink }) => {
    return (
        <BlogPostListContainer>
            <Items>
                {data.map(item => (
                    <Item key={item.node.id}>
                        <BlogPostCard data={item} />
                    </Item>
                ))}
            </Items>
            {!!showLink && (
                <LinkContainer>
                    <Link to="/blog">See all records &rarr;</Link>
                </LinkContainer>
            )}
        </BlogPostListContainer>
    );
};
