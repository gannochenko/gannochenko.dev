import React, { FunctionComponent } from 'react';

import {
    MenuContainer,
    InnerContainer,
    Items,
    Item,
    Home,
    Hamburger,
    Bar,
    Right,
} from './style';

import { Props } from './type';

export const Menu: FunctionComponent<Props> = () => {
    return (
        <MenuContainer>
            <InnerContainer>
                <Home to="/" />
                <Right>
                    <Items>
                        <Item to="/blog">Blog</Item>
                        <Item to="/techradar">Techradar</Item>
                        <Item to="/story">Story</Item>
                    </Items>
                    <Hamburger>
                        <Bar />
                        <Bar />
                        <Bar />
                    </Hamburger>
                </Right>
            </InnerContainer>
        </MenuContainer>
    );
};
