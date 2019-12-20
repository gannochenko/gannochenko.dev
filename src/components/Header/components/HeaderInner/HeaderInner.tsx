import React, { FunctionComponent } from 'react';

import { HeaderInnerContainer, BackgroundImage } from './style';

import { Props } from './type';

export const HeaderInner: FunctionComponent<Props> = ({ backgroundImage }) => {
    return (
        <HeaderInnerContainer>
            <BackgroundImage sizes={backgroundImage.childImageSharp.fluid} />
        </HeaderInnerContainer>
    );
};
