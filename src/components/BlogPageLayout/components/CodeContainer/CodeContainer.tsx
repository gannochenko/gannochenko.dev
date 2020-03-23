import React, { FunctionComponent } from 'react';

import { CodeContainerContainer } from './style';
import { Props } from './type';
import { Container } from '../../../Container';
import { listingTheme } from '../../prism-theme';

export const CodeContainer: FunctionComponent<Props> = ({ children }) => {
    return (
        <CodeContainerContainer bgColor={listingTheme.plain.backgroundColor!}>
            <Container>{children}</Container>
        </CodeContainerContainer>
    );
};
