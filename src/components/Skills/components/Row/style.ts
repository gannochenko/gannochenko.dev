import styled from 'styled-components';
import { withEffects } from '../../../../lib/effects';

const factor = 1.5;
const height = 4;
const width = height * 1.129;

export const RowContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Cell = withEffects(styled.div<{
    last?: boolean;
    firstShift?: boolean;
    enableEffect?: boolean;
}>`
    height: ${factor * height}rem;
    width: ${factor * width}rem;
    flex-shrink: 0;
    margin-top: -${factor * Math.round(height / 2)}rem;
    margin-right: ${factor * width * 0.54}rem;

    ${props => (props.last ? 'margin-right: 0;' : '')}
    ${props => (props.firstShift ? 'margin-left: 5.2rem;' : '')}

    // @ts-ignore
    ${props => (props.enableEffect ? props.runStandardEffect() : '')}
`);
