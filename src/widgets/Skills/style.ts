import styled from 'styled-components';
import { align } from '@bucket-of-bolts/styled-companion';

const factor = 1.5;
const height = 4;
// const width = height * 1.129;

export const SkillsContainer = styled.div`
    padding: 2rem 0;
    ${align('top', 'center')}
`;

export const SkillsOffset = styled.div`
    margin-top: ${factor * Math.round(height / 2)}rem;
`;

// export const Row = styled.div`
//     display: flex;
//     flex-wrap: wrap;
// `;
//
// export const Cell = styled.div<{ last?: boolean; firstShift?: boolean }>`
//     height: ${factor * height}rem;
//     width: ${factor * width}rem;
//     flex-shrink: 0;
//     margin-top: -${factor * Math.round(height / 2)}rem;
//     margin-right: ${factor * width * 0.54}rem;
//
//     ${props => (props.last ? 'margin-right: 0;' : '')}
//     ${props => (props.firstShift ? 'margin-left: 5.2rem;' : '')}
// `;
