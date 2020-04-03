import React, { FunctionComponent } from 'react';
import { Body, Main } from './style';
import { Props } from './type';
import { Header, Footer } from '../';
import { CookiePopup } from '../CookiePopup';

export const Layout: FunctionComponent<Props> = ({ children, props = {} }) => {
    const { location: { pathname = '' } = {} } = props;

    const isRoot = pathname === '/';

    return (
        <Main>
            <Header short={!isRoot} />
            <Body>{children}</Body>
            <Footer />
            <CookiePopup />
        </Main>
    );
};

export default Layout;
