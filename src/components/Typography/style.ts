import styled from 'styled-components';
import { colorEdward, foregroundColor } from '@gannochenko/etc';

export const H1 = styled.h1`
    margin: 4rem 0 2rem 0;
    font-size: ${({ theme }) => theme.fontSize.large};
    font-family: ${({ theme }) => theme.typography.fontFamilyTitle};
`;

export const H2 = styled.h2`
    margin: 4rem 0 2rem 0;
    font-size: 1.5rem;
    font-family: ${({ theme }) => theme.typography.fontFamilyTitle};
`;

export const H3 = styled.h3`
    margin: 2rem 0 2rem 0;
    font-size: 1.3rem;
    font-family: ${({ theme }) => theme.typography.fontFamilyTitle};
`;

export const H4 = styled.h3`
    margin: 2rem 0 2rem 0;
    font-size: 1.1rem;
    font-family: ${({ theme }) => theme.typography.fontFamilyTitle};
`;

export const Anchor = styled.a`
    text-decoration: none;
    ${({ theme }) =>
        foregroundColor(colorEdward, theme.color.link.hover, '300ms')}
`;

export const Label = styled.span`
    text-decoration: none;
    font-size: 1rem;
    ${() => foregroundColor(colorEdward, colorEdward)}
`;
