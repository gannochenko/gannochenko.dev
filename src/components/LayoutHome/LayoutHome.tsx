import React, { FunctionComponent } from 'react';
import { GlobalStyle, theme, ThemeContext } from '../../style';
import { Body, Main } from './style';
import { Props } from './type';
import { Header, Footer } from '../';

export const Layout: FunctionComponent<Props> = props => {
    const { children } = props;

    return (
        <ThemeContext.Provider value={theme}>
            <GlobalStyle />
            <Main>
                <Header />
                <Body>{children}</Body>
                <Footer />
            </Main>
        </ThemeContext.Provider>
    );
};

export default Layout;
