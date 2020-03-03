import styled from 'styled-components';
import { absoluteCover, align } from '@bucket-of-bolts/styled-companion';
import { Props } from './type';

export const TextFitContainer = styled.div<Props>`
    ${absoluteCover()};
    color: white;
    padding: 2.3rem 0.5rem;
    ${align('center', 'center')};
    font-size: ${props => (props.size === 'small' ? '0.8rem' : '0.9rem')};
    text-align: center;
    line-height: 1.1;
`;
