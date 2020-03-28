import styled from 'styled-components';
import { Props } from './type';

export const Shape = styled.path<Props>`
    fill: ${props => (props.filled ? '#9e3333' : 'none')};
    stroke: #9e3333;
    stroke-miterlimit: 10;
    stroke-width: 0.6rem;
`;
