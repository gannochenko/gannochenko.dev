import React, { FunctionComponent } from 'react';

import { CodeContainerContainer } from './style';
import { Props } from './type';
import { Container } from '../Container';
import { theme } from '../../style/prism-theme';

export const CodeContainer: FunctionComponent<Props> = ({ children }) => {
    return (
        <CodeContainerContainer bgColor={theme.plain.backgroundColor!}>
            <Container>{children}</Container>
        </CodeContainerContainer>
    );
};
