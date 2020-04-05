import styled from 'styled-components';
// import {
//   align
// } from '@bucket-of-bolts/styled-companion';

export const CopyrightContainer = styled.div`
    text-align: center;
    font-size: ${props => props.theme.font.micro};
    color: ${({ theme }) => theme.color.secondary};
    margin: 0.5rem 0.25rem;
`;
