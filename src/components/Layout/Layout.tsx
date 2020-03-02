import React, { FunctionComponent } from 'react';
import { GlobalStyle, theme, ThemeContext } from '../../style';
import { Body, Main, Title, BackContainer, BackLink } from './style';
import { Props } from './type';
import { Header, Footer, Container } from '../';

export const Layout: FunctionComponent<Props> = props => {
    const { children, title, backURL } = props;

    return (
        <ThemeContext.Provider value={theme}>
            <GlobalStyle />
            <Main>
                <Header short />
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
