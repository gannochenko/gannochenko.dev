import { ObjectLiteral } from '../type';
import { colorWhite, makeTheme, grid, cell } from '@gannochenko/etc';

export const theme = makeTheme({
    color: {
        backgroundPrimary: colorWhite,
        backgroundSecondary: '#20232a',
        textPrimary: '#0a0a0a',
        textSecondary: colorWhite,
        link: {
            normal: '#ce4f4f',
            hover: '#ce7553',
            altNormal: colorWhite,
            altHover: '#ce4f4f',
        },
        secondary: '#6c7a89',
    },
    link: {
        hoverEffectDuration: '300ms',
    },
    grid: {
        resolution: 12,
    },
    fontFamily: {
        roboto: 'Roboto, sans-serif',
        raleway: 'Raleway, sans-serif',
    },
    fontSize: {
        large: '1.6rem',
        medium: '1.4rem',
        bigger: '1.2rem',
        standard: '1.0rem',
        small: '0.8rem',
        micro: '0.6rem',
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 770,
            md: 990,
            lg: 1200,
        },
    },
    util: {
        grid: (config: ObjectLiteral<string>) => grid(theme, config),
        cell: (config: ObjectLiteral<string>) => cell(theme, config),
    },
    zIndex: {
        everest: 1000,
    },
});
