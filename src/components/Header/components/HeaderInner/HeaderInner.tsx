import React, { FunctionComponent } from 'react';

import { HeaderInnerContainer, BackgroundImage } from './style';

import { Props } from './type';
import { Container } from '../../../Container';
import { Avatar } from '../../../Avatar';
import { Link } from 'gatsby';

export const HeaderInner: FunctionComponent<Props> = ({ backgroundImage }) => {
    return (
        <HeaderInnerContainer>
            <BackgroundImage sizes={backgroundImage.childImageSharp.fluid} />
            <Container type="standard">
                <Link to="/">
                    <Avatar size="5rem" borderSize="0.1rem" />
                </Link>
            </Container>
        </HeaderInnerContainer>
    );
};
