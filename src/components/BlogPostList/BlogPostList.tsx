import React, { FunctionComponent } from 'react';

import { BlogPostCard } from '../BlogPostCard';
import { BlogPostListContainer, LinkContainer, Posts } from './style';
import { Props } from './type';
import { Link } from '../Link';

export const BlogPostList: FunctionComponent<Props> = ({ data, showLink }) => {
    return (
        <BlogPostListContainer>
            <Posts>
                {data.map(item => (
                    <BlogPostCard key={item.node.id} data={item} />
                ))}
            </Posts>
            {!!showLink && (
                <LinkContainer>
                    <Link to="/blog">See all posts &rarr;</Link>
                </LinkContainer>
            )}
        </BlogPostListContainer>
    );
};
