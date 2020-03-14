import React, { FunctionComponent } from 'react';

import { BlogPostListContainer } from './style';
import { Props } from './type';

export const BlogPostList: FunctionComponent<Props> = ({ data }) => {
    console.log(data);

    return <BlogPostListContainer></BlogPostListContainer>;
};
