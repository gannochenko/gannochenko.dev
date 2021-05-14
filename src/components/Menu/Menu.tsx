import React, { FunctionComponent, useState, useCallback } from 'react';

import {
    MenuContainer,
    InnerContainer,
    Items,
    Item,
    Home,
    Hamburger,
    Bar,
    Right,
    MobileItems,
    MobileItem,
} from './style';

import { Props } from './type';

export const Menu: FunctionComponent<Props> = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const onHamburgerClick = useCallback(() => {
        setMobileMenuOpen(!mobileMenuOpen);
    }, [mobileMenuOpen, setMobileMenuOpen]);
    const onMobileItemClick = useCallback(() => {
        setMobileMenuOpen(false);
    }, [setMobileMenuOpen]);

    return (
        <MenuContainer>
            <InnerContainer>
                <Home to="/" onClick={onMobileItemClick} />
                <Right>
                    <Items>
                        <Item to="/blog">Blog</Item>
                        <Item to="/projects">Personal projects</Item>
                        <Item to="/techradar">Techradar</Item>
                        {/*<Item to="/story">Story</Item>*/}
                        {/*<Item to="/contact">Contact</Item>*/}
                    </Items>
                    <Hamburger onClick={onHamburgerClick}>
                        <Bar />
                        <Bar />
                        <Bar />
                    </Hamburger>
                </Right>
            </InnerContainer>
            <MobileItems open={mobileMenuOpen}>
                <MobileItem to="/blog" onClick={onMobileItemClick}>
                    Blog
                </MobileItem>
                <MobileItem to="/projects" onClick={onMobileItemClick}>
                    Personal projects
                </MobileItem>
                <MobileItem to="/techradar" onClick={onMobileItemClick}>
                    Techradar
                </MobileItem>
                {/*<MobileItem to="/story" onClick={onMobileItemClick}>*/}
                {/*    Story*/}
                {/*</MobileItem>*/}
                {/*<MobileItem to="/contact" onClick={onMobileItemClick}>*/}
                {/*    Contact*/}
                {/*</MobileItem>*/}
            </MobileItems>
        </MenuContainer>
    );
};
