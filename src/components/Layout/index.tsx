import React, { FunctionComponent } from 'react';
import { GlobalStyle, theme, ThemeContext } from '../../style';
import { Body, Main, Title, BackContainer, BackLink } from './style';
import { Props } from './type';
import { Header, Footer, Container } from '../';

export const Layout: FunctionComponent<Props> = ({
    children,
    shortHeader,
    title,
    backURL,
}) => {
    return (
        <ThemeContext.Provider value={theme}>
            <GlobalStyle />
            <Main>
                <Header short={shortHeader} />
                {!!title && (
                    <Container type="standard">
                        <Title>{title}</Title>
                    </Container>
                )}
                <Body>{children}</Body>
                {!!backURL && (
                    <BackContainer>
                        <BackLink to={backURL}>&larr; Go back</BackLink>
                    </BackContainer>
                )}
                <Footer />
            </Main>
        </ThemeContext.Provider>
    );
};
