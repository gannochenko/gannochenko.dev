import styled from 'styled-components';
import { fgColor } from '@bucket-of-bolts/styled-companion';

export const Link = styled.a`
    ${props =>
        fgColor(
            props.theme.color.link.normal,
            props.theme.color.link.hover,
            props.theme.link.hoverEffectDuration,
        )};
`;
