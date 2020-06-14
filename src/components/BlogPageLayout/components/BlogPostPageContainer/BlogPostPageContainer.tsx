import React, { FunctionComponent, useRef } from 'react';

import { BlogPostPageContainerContainer } from './style';
import { Props } from './type';
import { Cup } from '../../../Cup';

export const BlogPostPageContainer: FunctionComponent<Props> = ({
    children,
}) => {
    const containerRef = useRef(null);

    return (
        <BlogPostPageContainerContainer ref={containerRef}>
            <Cup frameNumber={4} verticalConstraint={containerRef} />
            {children}
        </BlogPostPageContainerContainer>
    );
};
