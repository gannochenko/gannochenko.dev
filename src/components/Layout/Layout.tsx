import React, { FunctionComponent } from 'react';
import { GlobalStyle, theme, ThemeContext } from '../../style';
import { Body, Main, Title, BackContainer, BackLink } from './style';
import { Props } from './type';
import { Header, Footer, Container } from '../';

export const Layout: FunctionComponent<Props> = ({
    children,
    path,
    pageContext: { frontmatter: { title = '', backUrl = '' } = {} },
}) => {
    const isRoot = path === '/';

    return (
        <ThemeContext.Provider value={theme}>
            <GlobalStyle />
            <Main>
                <Header short={!isRoot} />
                {!!(title && !isRoot) && (
                    <Container type="standard">
                        <Title>{title}</Title>
                    </Container>
                )}
                <Body>{children}</Body>
                {!!backUrl && (
                    <BackContainer>
                        <BackLink to={backUrl}>&larr; Go back</BackLink>
                    </BackContainer>
                )}
                <Footer />
            </Main>
        </ThemeContext.Provider>
    );
};

export default Layout;
