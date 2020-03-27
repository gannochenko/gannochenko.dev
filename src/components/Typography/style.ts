import styled from 'styled-components';
import { fgColor } from '@bucket-of-bolts/styled-companion/build';

export const H1 = styled.h1`
    margin: 4rem 0 2rem 0;
    font-size: ${({ theme }) => theme.font.large};
`;

export const H2 = styled.h2`
    margin: 4rem 0 2rem 0;
    font-size: 1.5rem;
`;

export const H3 = styled.h3`
    margin: 2rem 0 2rem 0;
    font-size: 1.3rem;
`;

export const Anchor = styled.a`
    text-decoration: none;
    ${props =>
        fgColor(
            props.theme.palette.siskinSproutYellow,
            props.theme.color.link.normal,
            '300ms',
        )}
`;
