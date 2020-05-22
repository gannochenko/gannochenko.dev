import styled from 'styled-components';
import {
    backgroundCover,
    rectangle,
    round,
    align,
    absoluteCover,
} from '@gannochenko/etc';

const factor = 1.5;
const height = 4.2;
const width = height * 1.129;

export const SkillContainer = styled.div`
    height: ${factor * height * 0.9}rem;
    width: ${factor * width * 0.9}rem;
    position: relative;
    ${align('center', 'center')};

    &:hover {
        .skill-overlay {
            opacity: 1;
        }
    }
`;

export const HexagonContainer = styled.div`
    ${absoluteCover()};

    transition: opacity 300ms ease;
    &.skill-overlay {
        opacity: 0;
    }
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
  position: relative;
  ${props => (props.offsetX ? `margin-left: ${props.offsetX}` : '')}
`;
