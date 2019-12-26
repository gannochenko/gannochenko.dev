import styled from 'styled-components';
import { media } from '../../style';

export const ContainerWide = styled.div`
    width: 100%;
`;

export const ContainerStandard = styled.div`
    margin: 0 auto;
    width: auto;
    max-width: 60%;
    ${media({ xs: 'max-size: 90%', sm: 'max-size: 70%' })};
    padding: 0 1rem;
`;

export const ContainerNarrow = styled.div`
    margin: 0 auto;
    width: auto;
    max-width: 40%;
    ${media({ xs: 'max-size: 90%', sm: 'max-size: 60%' })};
    padding: 0 1rem;
`;
