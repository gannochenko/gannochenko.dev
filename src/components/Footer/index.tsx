import React, { FunctionComponent } from 'react';
import { Container, Info, NoWrap } from './style';

export const Footer: FunctionComponent<{}> = () => {
    return (
        <Container>
            <Info>
                <NoWrap>&copy; 2019</NoWrap>{' '}
                <NoWrap>&laquo;Gannochenko!&raquo; &mdash; a Blog</NoWrap>
            </Info>
            <Info>Our website uses no cookies :)</Info>
        </Container>
    );
};
