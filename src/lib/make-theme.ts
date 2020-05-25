import { ThemeInputType, ThemeType } from './type';

export const makeTheme = (theme: ThemeInputType) => {
    theme = theme || {};
    theme.breakpoints = theme.breakpoints || {
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
    };

    const resultTheme = theme as ThemeType;

    resultTheme.cache = {
        breakpoints: {
            values: Object.values(theme.breakpoints.values),
            keys: Object.keys(theme.breakpoints.values),
        },
    };

    return resultTheme;
};
