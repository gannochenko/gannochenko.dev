import React, { FunctionComponent, useRef } from 'react';

import { BlogPostPageContainerContainer } from './style';
import { Props } from './type';
import { Cup } from '../../../Cup';
import { AboutAuthor } from '../../../AboutAuthor';
import { Container } from '../../../Container';

export const BlogPostPageContainer: FunctionComponent<Props> = ({
    children,
}) => {
    const containerRef = useRef(null);

    return (
        <BlogPostPageContainerContainer ref={containerRef}>
            <Cup verticalConstraint={containerRef} />
            {children}
            <Container>
                <AboutAuthor />
            </Container>
        </BlogPostPageContainerContainer>
    );
};
