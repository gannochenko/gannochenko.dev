import styled from 'styled-components';
import { absoluteCover, align } from '@gannochenko/etc';
import { Props } from './type';

export const TextFitContainer = styled.div<Props>`
    ${absoluteCover()};
    color: white;
    padding: 2.3rem 0.5rem;
    ${align('center', 'center')};
    font-size: ${({ theme, size }) =>
        size === 'small' ? theme.fontSize.small : theme.fontSize.standard};
    text-align: center;
    line-height: 1.1;
`;
