import styled, { css } from 'styled-components';
import Img from 'gatsby-image';
import {
    absoluteCover,
    central,
    bouncedAnimation,
    align,
    rectangle,
    backgroundCover,
    group,
} from '@bucket-of-bolts/styled-companion';
const arrow = require('./assets/arrow.svg') as string;
import { withEffects } from '../../../../lib/effects';
import { theme } from '../../../../style';

export const HeaderMainContainer = styled.div`
    position: relative;
    min-width: 320px;
    flex-shrink: 0;
`;

export const BackgroundImage = styled(Img)`
    ${absoluteCover()};
    user-select: none;
    position: absolute !important;
`;

export const ImageOverlay = styled.div`
    ${absoluteCover()};
    background-color: black;
    opacity: 0.6;
`;

const expandVertically = css`
    height: 100vh;
    overflow-y: hidden;
`;
export const Data = styled.div`
    font-family: Raleway, sans-serif;
    ${central()}
    ${align('center', 'center', 'column')}
    ${props =>
        props.theme.util.media({
            md: expandVertically,
            lg: expandVertically,
        })};
    padding: 2rem 1rem;
    ${props =>
        props.theme.util.media({
            sm: css`
                padding-top: 3rem;
            `,
            xs: css`
                padding-top: 3rem;
            `,
        })};
    position: relative;
`;

export const Arrow = withEffects(styled.div<{ theme: typeof theme }>`
    ${backgroundCover(arrow)};
    ${rectangle('72px', '53px', 0.7)};
    position: absolute;
    left: calc(50% - 1rem);

    cursor: pointer;
    bottom: 2.5rem;
    color: white;
    font-size: 3rem;

    animation-name: ${bouncedAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in;

    display: none;
    ${props =>
        props.theme.util.media({
            lg: 'display: block;',
            md: 'display: block;',
        })}

    // @ts-ignore
    ${props => props.runStandardEffect()}
`);

export const DataColumn = styled.div`
    ${align('center', 'left', 'column')};
    width: 100%;
    height: 100%;
    position: relative;
`;

export const HelloBlock = styled.div`
    color: #fff;
    ${props =>
        props.theme.util.grid({
            guttersW: { xs: '0', all: '1rem' },
            guttersH: { xs: '1.5rem' },
        })}
    ${align('center', 'left')}
    width: 100%;
`;

export const HelloLeft = withEffects(styled.div`
    ${props => props.theme.util.cell({ xs: 12, all: 4 })}
    ${align('top', 'center')}
    // @ts-ignore
    ${props => props.runStandardEffect()}
`);

export const HelloRight = styled.div`
    ${props => props.theme.util.cell({ xs: 12, all: 8 })}
    ${props => props.theme.util.media({ xs: align('top', 'center', 'column') })}
`;

export const NameBlock = withEffects(styled.div`
    font-family: Raleway, sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    letter-spacing: 0.05rem;
    ${props => props.theme.util.media({ xs: 'text-align: center;' })}
    // @ts-ignore
    ${props => props.runStandardEffect()}
`);

export const GreetingBlock = withEffects(styled.div`
    letter-spacing: 0.05rem;
    ${props => props.theme.util.media({ xs: 'text-align: center;' })}
    // @ts-ignore
    ${props => props.runStandardEffect()}
`);

export const SocialBar = withEffects(styled.div`
    ${group(null, '1.5rem')};
    padding-top: 1.5rem;
    // @ts-ignore
    ${props => props.runStandardEffect()}
`);

export const MenuOffset = styled.div`
    height: 48px;
`;
