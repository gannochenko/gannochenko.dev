import React from 'react';
import styled from 'styled-components';
import { fgColor } from '@bucket-of-bolts/styled-companion';
import { Link as GatsbyLink } from 'gatsby';
import { FunctionComponent } from 'react';

export const GatsbyLinkStyled = styled(GatsbyLink)<{ fontSize?: string }>`
    ${props =>
        fgColor(
            props.theme.color.link.normal,
            props.theme.color.link.hover,
            props.theme.link.hoverEffectDuration,
        )};
    font-size: ${({ theme, fontSize }) =>
        fontSize ? theme.font[fontSize] : 'inherit'};
`;

export const LinkStyled = styled.a<{ fontSize?: string }>`
    ${props =>
        fgColor(
            props.theme.color.link.normal,
            props.theme.color.link.hover,
            props.theme.link.hoverEffectDuration,
        )};
    font-size: ${({ theme, fontSize }) =>
        fontSize ? theme.font[fontSize] : 'inherit'};
`;

export const Link: FunctionComponent<{
    to?: string;
    href?: string;
    fontSize?: string;
}> = props => {
    const { to, href } = props;
    const link = to || href || '';

    if (link.startsWith('https://')) {
        return <LinkStyled {...props} href={link} target="_blank" />;
    }

    return <GatsbyLinkStyled to={link} {...props} />;
};
