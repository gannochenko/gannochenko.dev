import styled from 'styled-components';
import Img from 'gatsby-image';
import {
    absoluteCover,
    central,
    bouncedAnimation,
    align,
    icon,
    group,
} from '@bucket-of-bolts/styled-companion';
import { media, cell, grid } from '../../style';
import { withEffects, effect } from '../../lib/effects';

export const Container = styled.div`
    position: relative;
    min-width: 320px;
    font-family: Montserrat, sans-serif;
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

const expandVertically = 'height: 100vh; overflow-y: hidden;';
export const Data = styled.div`
    ${central()}
    ${align('center', 'center', 'column')}
    ${media({
        md: expandVertically,
        lg: expandVertically,
    })}
    padding: 2rem 1rem;
    position: relative;
`;

export const Arrow = withEffects(styled.div`
    ${icon('keyboard_arrow_down')};
    position: absolute;
    left: calc(50% - 2rem);

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
    ${media({
        lg: 'display: block;',
        md: 'display: block;',
    })}

    // @ts-ignore
    ${props => effect(props)}
`);

//export const Title = withEffects(styled.h1`
//     font-size: 4rem;
//     font-weight: 600;
//     letter-spacing: 0.4rem;
//     ${media({
//         xs: `
//         font-size: 1.5rem;
//         letter-spacing: 0.15rem;
//     `,
//     })};
//     color: white;
//     text-align: center;
//     margin: 0;
//
//     // @ts-ignore
//     ${props => effect(props)}
// `);
//
// export const SubTitle = withEffects(styled.div`
//     color: #fff;
//     position: relative;
//     text-align: center;
//     font-size: 1.3rem;
//     max-width: 60%;
//     margin: 1rem 0 0 0;
//     padding: 0;
//     ${media({
//         xs: `
//         font-size: 1rem;
//     `,
//     })}
//
//     // @ts-ignore
//     ${props => effect(props)}
// `);

export const DataColumn = styled.div`
    ${align('center', 'left', 'column')}
    width: 100%;
    height: 100%;
    position: relative;
`;

export const HelloBlock = styled.div`
  //color: ${props => props.theme.color.background};
  color: #fff;
  ${grid({ guttersW: { xs: '0', all: '1rem' }, guttersH: { xs: '1.5rem' } })}
  ${align('center', 'left')}
  width: 100%;
`;

export const HelloLeft = styled.div`
    ${cell({ xs: 12, all: 4 })}
    ${align('top', 'center')}
`;

export const HelloRight = styled.div`
    ${cell({ xs: 12, all: 8 })}
    ${media({ xs: align('top', 'center', 'column') })}
`;

export const GreetingBlock = styled.div`
    letter-spacing: 0.05rem;
    ${media({ xs: 'text-align: center;' })}
`;

export const NameBlock = styled.div`
    font-size: 1.5rem;
    letter-spacing: 0.05rem;
    ${media({ xs: 'text-align: center;' })}
`;

export const SocialBar = styled.div`
    ${group(null, '1.5rem')}
    padding-top: 1.5rem;
`;
