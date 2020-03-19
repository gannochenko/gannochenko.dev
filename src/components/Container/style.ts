import styled from 'styled-components';
import { Props } from './type';

export const contentAlign = ({ contentAlign }: Props) => {
    if (contentAlign === 'center') {
        return `
            display: flex;
            justify-content: center;
        `;
    }

    return '';
};

export const ContainerWide = styled.div<Props>`
    width: 100%;
    ${props => contentAlign(props)}
`;

export const ContainerStandard = styled.div<Props>`
    margin: 0 auto;
    width: 80%;
    max-width: 1200px;
    ${props => props.theme.util.media({ xs: 'width: 90%', sm: 'width: 90%' })};
    padding: 0 1rem;
    ${props => contentAlign(props)};
`;

export const ContainerNarrow = styled.div<Props>`
    margin: 0 auto;
    width: auto;
    max-width: 40%;
    ${props =>
        props.theme.util.media({ xs: 'max-width: 90%', sm: 'max-width: 90%' })};
    padding: 0 1rem;
    ${props => contentAlign(props)}
`;
