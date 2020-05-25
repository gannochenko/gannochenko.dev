import { ThemeInputType, ThemeType } from './type';
import {
    breakpointUp,
    breakpointDown,
    breakpointBetween,
    breakpointOnly,
} from './media';

export const makeTheme = (theme: ThemeInputType) => {
    theme = theme || {};
    theme.breakpoints = {
        // xs: [null, 767], // max-width: 767
        // sm: [768, 991], // min-width: 768 and max-width: 991
        // md: [992, 1199], // min-width: 992 and max-width: 1199
        // lg: [1200, null], // min-width: 1200

        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
        },
        unit: 'px',
        ...theme.breakpoints,
    };

    const resultTheme = theme as ThemeType;

    resultTheme.utils = {
        ...resultTheme.utils,
        breakpointUp: (breakpoint: string, prefix?: string) =>
            breakpointUp(resultTheme, breakpoint, prefix),
        breakpointDown: (breakpoint: string, prefix?: string) =>
            breakpointDown(resultTheme, breakpoint, prefix),
        breakpointOnly: (breakpoint: string, prefix?: string) =>
            breakpointOnly(resultTheme, breakpoint, prefix),
        breakpointBetween: (
            breakpointStart: string,
            breakpointEnd: string,
            prefix?: string,
        ) =>
            breakpointBetween(
                resultTheme,
                breakpointStart,
                breakpointEnd,
                prefix,
            ),
    };

    resultTheme.cache = {
        breakpoints: {
            values: Object.values(theme.breakpoints.values),
            keys: Object.keys(theme.breakpoints.values),
        },
    };

    return resultTheme;
};
