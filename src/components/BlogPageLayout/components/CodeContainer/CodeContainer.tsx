import React, { FunctionComponent } from 'react';

import { CodeContainerContainer, CodeKey } from './style';
import { Props } from './type';
import { Container } from '../../../Container';

export const CodeContainer: FunctionComponent<Props> = ({
    children,
    bgColor,
    codeKeyColor,
    blockKey,
}) => {
    return (
        <CodeContainerContainer bgColor={bgColor}>
            <Container>
                {!!blockKey && (
                    <CodeKey color={codeKeyColor}>{blockKey}</CodeKey>
                )}
                {children}
            </Container>
        </CodeContainerContainer>
    );
};
