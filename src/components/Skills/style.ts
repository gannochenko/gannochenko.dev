import styled from 'styled-components';
import { align, group } from '@bucket-of-bolts/styled-companion';

const factor = 1.5;
const height = 4;
// const width = height * 1.129;

export const SkillsContainer = styled.div`
    margin: 3rem 0;
`;

export const InnerContainer = styled.div`
    ${align('top', 'center')}
    ${group('1rem')}
`;

export const SkillsOffset = styled.div`
    margin-top: ${factor * Math.round(height / 2)}rem;
    //margin-bottom: -0.5rem;
`;
