import styled from 'styled-components';
import {
    backgroundCover,
    rectangle,
    round,
    align,
} from '@bucket-of-bolts/styled-companion';
const hexagon = require('./assets/hexagon.svg') as string;

const factor = 1.5;
const height = 4;
const width = height * 1.129;

export const SkillContainer = styled.div``;

export const Hexagon = styled.div`
    height: ${factor * height * 0.9}rem;
    width: ${factor * width * 0.9}rem;
    ${backgroundCover(hexagon)};
    ${align('center', 'center')}
`;

export const Logo = styled.div<{
    src: string;
    size?: string;
    width?: string;
    isRound?: boolean;
    offsetX?: string;
}>`
  ${props => rectangle(props.size ? props.size : '5.5rem', props.width)}
  ${props => (props.isRound ? round() : '')}
  ${props => backgroundCover(props.src)}
  overflow: hidden;
  ${props => (props.offsetX ? `margin-left: ${props.offsetX}` : '')}
`;
