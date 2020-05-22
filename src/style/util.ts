import { op } from '@gannochenko/etc';
import { Theme } from './type';
import { ObjectLiteral } from '../type';

const toHalf = (x: number) => x / 2;
const negate = (x: number) => x * -1;

export const media = (config: ObjectLiteral = {}, theme: Theme = {}) => {
    let result = '';

    if ('all' in config) {
        result += config.all;
    }

    Object.keys(theme.breakpoints).forEach(bp => {
        const mediaInfo = (theme.media as ObjectLiteral)[bp];
        if (bp in config) {
            result += `
                @media screen and ${mediaInfo} {
                    ${config[bp]}
                }
            `;
        }
    });

    return result;
};

export const makeTheme = (theme: ObjectLiteral) => {
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

export const grid = (config: ObjectLiteral, theme: Theme = {}) => {
    let cssSelf = '';
    let cssChildren = '';

    // gutters
    const guttersH = (config.guttersH ||
        config.guttersY ||
        config.gutters) as ObjectLiteral;
    const guttersW = (config.guttersW ||
        config.guttersX ||
        config.gutters) as ObjectLiteral;

    if (guttersH || guttersW) {
        if (guttersW && 'all' in guttersW) {
            const gutter = guttersW.all;
            const gutterHalf = op(gutter, toHalf);
            const gutterHalfNeg = op(gutterHalf, negate);
            cssSelf += `
                margin-left: ${gutterHalfNeg};
                margin-right: ${gutterHalfNeg};
            `;
            cssChildren += `
                padding-left: ${gutterHalf};
                padding-right: ${gutterHalf};
            `;
        }

        if (guttersH && 'all' in guttersH) {
            const gutter = guttersH.all;
            const gutterNeg = op(gutter, negate);
            cssSelf += `
                margin-bottom: ${gutterNeg};
            `;
            cssChildren += `
                padding-bottom: ${gutter};
            `;
        }

        Object.keys(theme.breakpoints).forEach(bp => {
            const media = (theme.media as ObjectLiteral)[bp];

            if (guttersW) {
                if (bp in guttersW) {
                    const gutter = guttersW[bp];
                    const gutterHalf = op(gutter, toHalf);
                    const gutterHalfNeg = op(gutterHalf, negate);
                    cssSelf += `
                        @media screen and ${media} {
                            margin-left: ${gutterHalfNeg};
                            margin-right: ${gutterHalfNeg};
                        };
                    `;
                    cssChildren += `
                        @media screen and ${media} {
                            padding-left: ${gutterHalf};
                            padding-right: ${gutterHalf};
                        }
                    `;
                }
            }

            if (guttersH) {
                if (bp in guttersH) {
                    const gutter = guttersH[bp];
                    const gutterNeg = op(gutter, negate);
                    cssSelf += `
                        @media screen and ${media} {
                            margin-bottom: ${gutterNeg};
                        }
                    `;
                    cssChildren += `
                        @media screen and ${media} {
                            padding-bottom: ${gutter};
                        }
                    `;
                }
            }
        });
    }

    return `
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        ${cssSelf}
        & > * {
            ${cssChildren}
        }
    `;
};

const makeConstraintMix = (width: string) => {
    return `
        flex-basis: ${width};
        width: ${width};
    `;
};

const calcWidth = (width: number, resolution: number) =>
    Math.floor((width / resolution) * 1000) * 0.1;

export const cell = (config: ObjectLiteral, theme: Theme = {}) => {
    let result = '';

    const { resolution } = theme;

    Object.keys(theme.breakpoints).forEach(bp => {
        const media = (theme.media as ObjectLiteral)[bp];
        let width = '';
        if (bp in config) {
            // todo: cache, but measure the performance
            width = makeConstraintMix(
                `${calcWidth(config[bp] as number, resolution as number)}%`,
            );
        } else {
            width = makeConstraintMix(
                'all' in config
                    ? `${calcWidth(
                          config.all as number,
                          resolution as number,
                      )}%`
                    : 'auto',
            );
        }

        result += `
            @media screen and ${media} { ${width} }
        `;
    });

    return result;
};
