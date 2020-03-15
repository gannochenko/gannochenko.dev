import styled from 'styled-components';

export const H1 = styled.h1`
    margin: 1rem 0 2rem 0;
    font-size: ${({ theme }) => theme.font.large};
`;

export const H2 = styled.h2`
    margin: 1rem 0 1rem 0;
    font-size: ${({ theme }) => theme.font.medium};
`;

export const H3 = styled.h3`
    margin: 1rem 0 1rem 0;
    font-size: ${({ theme }) => theme.font.standard};
`;
