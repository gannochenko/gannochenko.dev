import styled from 'styled-components';
import { effect, withEffects } from '../../lib/effects';

export const EffectContainer = withEffects(styled.div`
    // @ts-ignore
    ${props => effect(props)}
`);
