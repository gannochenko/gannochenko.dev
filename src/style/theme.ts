import { media, grid, cell, palette } from '@bucket-of-bolts/styled-companion';
import { ObjectLiteral } from '../type';
import { GridTheme } from './type';

export const theme = {
    color: {
        backgroundPrimary: palette.white,
        backgroundSecondary: '#0a0a0a',
        textPrimary: '#0a0a0a',
        textSecondary: palette.white,
        link: {
            normal: '#9e3333',
            hover: '#842020',
            altNormal: palette.white,
            altHover: palette.trueRed,
        },
    },
    link: {
        hoverEffectDuration: '300ms',
    },
    grid: {
        resolution: 12,
        breakpoints: {
            xs: [null, 767],
            sm: [768, 991],
            md: [992, 1199],
            lg: [1200, null],
        },
    },
    fontFamily: {
        roboto: 'Roboto, sans-serif',
        raleway: 'Raleway, sans-serif',
    },
    font: {
        large: '1.6rem',
        medium: '1.4rem',
        bigger: '1.2rem',
        standard: '1.0rem',
        small: '0.8rem',
        micro: '0.6rem',
    },
    util: {
        media: (rules: ObjectLiteral<string>) => media(rules, theme.grid),
        grid: (rules: GridTheme = {}) => grid(rules, theme.grid),
        cell: (rules: ObjectLiteral<string | number> = {}) =>
            cell(rules, theme.grid),
    },
};
