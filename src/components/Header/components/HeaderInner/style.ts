import styled from 'styled-components';
import { absoluteCover } from '@bucket-of-bolts/styled-companion';
import Img from 'gatsby-image';

export const HeaderInnerContainer = styled.div`
    height: 5rem;
    position: relative;
    flex-shrink: 0;
`;

export const BackgroundImage = styled(Img)`
    ${absoluteCover()};
    user-select: none;
    position: absolute !important;
`;
