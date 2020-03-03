import styled from 'styled-components';
import { align } from '@bucket-of-bolts/styled-companion/build';
import Img from 'gatsby-image';
import { media, grid, cell, withTheme } from '../../style';
import { runStandardEffect, withEffects } from '../../lib/effects';

export const StandardBlockContainer = withTheme(styled.div`
    position: relative;
    margin: 2rem 0;

    // @ts-ignore
    font-size: ${props =>
        props.fontSize ? props.theme.font[props.fontSize] : 'inherit'};

    // @ts-ignore
    ${props => runStandardEffect(props)}
`);

export const Inner = styled.div``;

export const ImageSingle = styled.div`
    position: relative;
    ${align('center', 'center')};
    width: 100%;
`;

export const ImageWrap = styled.div`
    width: 75%;
    ${media({ xs: 'size: 100%;' })}
`;

export const Image = styled(Img)`
    width: 100%;
    height: auto;
    background-color: #f2f1ef;
    border-radius: 2px;
`;

export const ImageGallery = styled.div`
    margin: 0 5rem;
    ${media({ sm: 'margin: 0 2rem;', xs: 'margin: 0' })};
    width: 100%;
`;

export const ImageGalleryGrid = styled.div`
    ${grid({ gutters: { all: '1rem', xs: '0.5rem' } })};
`;

export const GalleryItem = withEffects(styled.div`
    ${cell({ xs: 12, all: 4 })};

    // @ts-ignore
    ${props => runStandardEffect(props)}
`);
