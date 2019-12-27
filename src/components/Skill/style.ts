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

export const SkillContainer = styled.div<{
    last?: boolean;
    firstShift?: boolean;
}>`
    // height: ${factor * height}rem;
    // width: ${factor * width}rem;
    // flex-shrink: 0;
    // margin-top: -${factor * Math.round(height / 2)}rem;
    // margin-right: ${factor * width * 0.54}rem;
    //
    // ${props => (props.last ? 'margin-right: 0;' : '')}
    // ${props => (props.firstShift ? 'margin-left: 5.2rem;' : '')}
`;

export const Hexagon = styled.div`
    height: ${factor * height * 0.9}rem;
    width: ${factor * width * 0.9}rem;
    ${backgroundCover(hexagon)};
    ${align('center', 'center')}
`;

// export const LogoFrame = styled.div`
//   ${rectangle(null, '100%')}
//   padding: 1.2rem;
// `;

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
  // ${props => (props.iOffs ? `margin-top: ${props.iOffs}` : '')}
  ${props => (props.offsetX ? `margin-left: ${props.offsetX}` : '')}
`;
