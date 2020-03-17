import React, { FunctionComponent } from 'react';

import { BlogPostHeaderContainer } from './style';
import { Props } from './type';

export const BlogPostHeader: FunctionComponent<Props> = props => {
    console.log('props');
    console.log(props);

    return <BlogPostHeaderContainer>1</BlogPostHeaderContainer>;
};
