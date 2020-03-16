import styled from 'styled-components';
import { fgColor } from '@bucket-of-bolts/styled-companion';
import { Link as GatsbyLink } from 'gatsby';

export const Link = styled(GatsbyLink)`
    ${props =>
        fgColor(
            props.theme.color.link.normal,
            props.theme.color.link.hover,
            props.theme.link.hoverEffectDuration,
        )};
`;
