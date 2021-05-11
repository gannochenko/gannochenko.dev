import React, { FunctionComponent } from 'react';

import {
    CodeContainerRoot,
    CodeContainerContainer,
    CodeKey,
    Wrapper,
    File,
} from './style';
import { Props } from './type';
import { Container } from '../../../Container';

export const CodeContainer: FunctionComponent<Props> = ({
    children,
    bgColor,
    wide,
    codeKeyColor,
    blockKey,
    file,
}) => {
    return (
        <CodeContainerRoot>
            {!!file && (
                <Container>
                    <File>👀&nbsp;&nbsp;{file}</File>
                </Container>
            )}
            <CodeContainerContainer wide={wide} bgColor={bgColor}>
                <Container>
                    <Wrapper bgColor={bgColor} roundedTop={!file}>
                        {!!blockKey && (
                            <CodeKey color={codeKeyColor}>{blockKey}</CodeKey>
                        )}
                        {children}
                    </Wrapper>
                </Container>
            </CodeContainerContainer>
        </CodeContainerRoot>
    );
};
