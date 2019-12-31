import styled from 'styled-components';
import { media } from '../../style';
import { Props } from './type';

export const contentAlign = ({ contentAlign }: Props) => {
    if (contentAlign !== 'center') {
        return '';
    }

    return `
        display: flex;
        justify-content: center;
    `;
};

export const ContainerWide = styled.div<Props>`
    width: 100%;
    ${props => contentAlign(props)}
`;

export const ContainerStandard = styled.div<Props>`
    margin: 0 auto;
    width: auto;
    max-width: 60%;
    ${media({ xs: 'max-width: 90%', sm: 'max-width: 70%' })};
    padding: 0 1rem;
    ${props => contentAlign(props)};
`;

export const ContainerNarrow = styled.div<Props>`
    margin: 0 auto;
    width: auto;
    max-width: 40%;
    ${media({ xs: 'max-width: 90%', sm: 'max-width: 60%' })};
    padding: 0 1rem;
    ${props => contentAlign(props)}
`;
