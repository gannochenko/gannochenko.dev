import React, { FunctionComponent } from 'react';
import { GlobalStyle, theme, ThemeContext } from '../../style';
import { Inner } from './style';
import { Props } from './type';
import { Header, Footer } from '../';

export const Layout: FunctionComponent<Props> = ({ children, shortHeader }) => {
    return (
        <ThemeContext.Provider value={theme}>
            <GlobalStyle />
            <Header short={shortHeader} />
            <Inner>{children}</Inner>
            <Footer />
        </ThemeContext.Provider>
    );
};
