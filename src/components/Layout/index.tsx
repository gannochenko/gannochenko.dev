import React, { FunctionComponent } from 'react';
import { GlobalStyle, theme, ThemeContext } from '../../style';
import { Body, Main } from './style';
import { Props } from './type';
import { Header, Footer } from '../';

export const Layout: FunctionComponent<Props> = ({ children, shortHeader }) => {
    return (
        <ThemeContext.Provider value={theme}>
            <GlobalStyle />
            <Main>
                <Header short={shortHeader} />
                <Body>{children}</Body>
                <Footer />
            </Main>
        </ThemeContext.Provider>
    );
};
