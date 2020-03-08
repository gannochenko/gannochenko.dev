import React, { FunctionComponent } from 'react';

import {
    MenuContainer,
    InnerContainer,
    Items,
    Item,
    Underline,
    Home,
} from './style';

import { Props } from './type';

export const Menu: FunctionComponent<Props> = () => {
    return (
        <MenuContainer>
            <InnerContainer>
                <Home to="/" />
                <Items>
                    <Item to="/blog">
                        Blog
                        <Underline />
                    </Item>
                    <Item to="/techradar">Techradar</Item>
                    <Item to="/story">Story</Item>
                </Items>
            </InnerContainer>
        </MenuContainer>
    );
};
