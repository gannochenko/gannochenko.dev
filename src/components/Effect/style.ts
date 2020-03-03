import styled from 'styled-components';
import { runStandardEffect, withEffects } from '../../lib/effects';

export const EffectContainer = withEffects(styled.div`
    // @ts-ignore
    ${props => runStandardEffect(props)}
`);
