import { ObjectLiteral } from '../type';
import { colorWhite } from '@gannochenko/etc';

const media = (rules: ObjectLiteral = {}, theme: ObjectLiteral = {}) => {
    let result = '';

    if ('all' in rules) {
        result += rules.all;
    }

    Object.keys(theme.breakpoints).forEach(bp => {
        const mediaInfo = (theme.media as ObjectLiteral)[bp];
        if (bp in rules) {
            result += `
                @media screen and ${mediaInfo} {
                    ${rules[bp]}
                }
            `;
        }
    });

    return result;
};

const makeTheme = (theme: ObjectLiteral) => {
    theme = theme || {};
    theme.resolution = theme.resolution || 12;
    theme.breakpoints = theme.breakpoints || {
        xs: [null, 767], // max-width: 767
        sm: [768, 991], // min-width: 768 and max-width: 991
        md: [992, 1199], // min-width: 992 and max-width: 1199
        lg: [1200, null], // min-width: 1200
    };

    const bpMedia: { [k: string]: string } = {};
    Object.keys(theme.breakpoints).forEach((bp: string) => {
        const item = (theme.breakpoints as { [k: string]: (number | null)[] })[
            bp
        ];
        const range = [];
        if (item[0]) {
            range.push(`(min-width: ${item[0]}px)`);
        }
        if (item[1]) {
            range.push(`(max-width: ${item[1]}px)`);
        }
        bpMedia[bp] = range.join(' and ');
    });

    theme.media = bpMedia;

    return theme;
};

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
    },
    zIndex: {
        everest: 1000,
    },
});

console.log(theme);
