import React, { FunctionComponent } from 'react';

import {
    BlogPostCardRoot,
    Preview,
    ViewPost,
    Title,
    Date,
    TitleLink,
} from './style';
import { Props } from './type';
import { formatDate } from '../../lib/util';

export const BlogPostCard: FunctionComponent<Props> = ({ data }) => {
    const {
        frontmatter: { path, preview, description, date, title },
    } = data;

    return (
        <BlogPostCardRoot>
            <Title>
                <Date>{formatDate(date)}</Date>
                <TitleLink to={path}>{title}</TitleLink>
            </Title>

            <Preview to={path}>{preview || description}</Preview>

            <ViewPost to={path} fontSize="small">
                Read the post
            </ViewPost>
        </BlogPostCardRoot>
    );
};
