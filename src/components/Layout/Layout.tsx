import React, { FunctionComponent } from 'react';
import { GlobalStyle, theme, ThemeContext } from '../../style';
import { Body, Main, Title, BackContainer, BackLink } from './style';
import { Props } from './type';
import { Header, Footer, Container, SEO } from '../';

export const Layout: FunctionComponent<Props> = props => {
    const {
        children,
        path,
        pageContext: {
            frontmatter: {
                title = '',
                backUrl = '',
                keywords = [],
                description = '',
            } = {},
        },
    } = props;

    console.log('SSR:');
    console.log('props:');
    console.log(props);

    const isRoot = path === '/';

    return (
        <ThemeContext.Provider value={theme}>
            <GlobalStyle />
            <SEO title={title} keywords={keywords} description={description} />
            <Main>
                <Header short={false} />
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
