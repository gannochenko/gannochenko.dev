import styled from 'styled-components';
import { round } from '@bucket-of-bolts/styled-companion';
import Img from 'gatsby-image';
import { withEffects, effect } from '../../lib/effects';

export const Container = withEffects(styled.div`
    ${round()};
    width: 12rem;
    flex-shrink: 0;
    padding: 0.2rem;
    background-color: white;
    overflow: hidden;
    user-select: none;
    // @ts-ignore
    ${props => effect(props)}
`);

export const Image = styled(Img)`
    height: 100%;
    width: 100%;
    ${round()}
`;
