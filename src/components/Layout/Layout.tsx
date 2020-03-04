import React, { FunctionComponent } from 'react';
import { GlobalStyle, theme, ThemeContext } from '../../style';
import { Body, Main, Title, BackContainer, BackLink } from './style';
import { Props } from './type';
import { Header, Footer, Container, SEO } from '../';

export const Layout: FunctionComponent<Props> = props => {
    const {
        children,
        location: { pathname = '' } = {},
        pageContext: {
            frontmatter: {
                title = '',
                backUrl = '',
                keywords = [],
                description = '',
            } = {},
        },
    } = props;

    const isRoot = pathname === '/';

    return (
        <ThemeContext.Provider value={theme}>
            <GlobalStyle />
            <SEO title={title} keywords={keywords} description={description} />
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
