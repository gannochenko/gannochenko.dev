import React, { FunctionComponent } from 'react';

import { MenuContainer, InnerContainer, Items, Item, Underline } from './style';

import { Props } from './type';

export const Menu: FunctionComponent<Props> = ({ children }) => {
    return (
        <MenuContainer>
            <InnerContainer>
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
