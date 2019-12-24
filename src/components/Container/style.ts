import styled from 'styled-components';
import { media } from '../../style';

export const ContainerWide = styled.div`
    width: 100%;
`;

export const ContainerStandard = styled.div`
    margin: 0 auto;
    width: auto;
    max-width: 60%;
    ${media({ xs: 'max-width: 90%', sm: 'max-width: 70%' })};
    padding: 0 1rem;
`;

export const ContainerNarrow = styled.div`
    margin: 0 auto;
    width: auto;
    max-width: 40%;
    ${media({ xs: 'max-width: 90%', sm: 'max-width: 60%' })};
    padding: 0 1rem;
`;
