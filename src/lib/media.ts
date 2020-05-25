import { ThemeType } from './type';

const edgeValue = 0.05;

export const breakpointUp = (
    theme: ThemeType,
    breakpoint: string,
    prefix = '@media',
) => {
    const { values } = theme.breakpoints;

    if (!(breakpoint in values)) {
        return '';
    }

    return `${prefix}(min-width:${values[breakpoint]}px)`;
};

export const breakpointDown = (
    theme: ThemeType,
    breakpoint: string,
    prefix = '@media',
) => {
    const { keys } = theme.cache.breakpoints;
    const { values } = theme.breakpoints;

    if (!(breakpoint in values)) {
        return '';
    }

    const rightIndex = keys.indexOf(breakpoint) + 1;
    const rightValue = values[keys[rightIndex]];

    if (rightIndex === keys.length) {
        // xl down applies to all sizes
        return breakpointUp(theme, 'xs', prefix);
    }

    if (!(typeof rightValue !== 'undefined' && rightIndex > 0)) {
        return '';
    }

    return `${prefix}(max-width:${rightValue - edgeValue}px)`;
};

export const breakpointBetween = (
    theme: ThemeType,
    breakpointStart: string,
    breakpointEnd: string,
    prefix = '@media',
) => {
    const { keys } = theme.cache.breakpoints;
    const { values } = theme.breakpoints;

    const rightIndex = keys.indexOf(breakpointEnd);

    if (rightIndex === keys.length - 1) {
        return breakpointUp(theme, breakpointStart, prefix);
    }

    return `${prefix}(min-width:${
        values[breakpointStart]
    }px) and (max-width:${values[keys[rightIndex + 1]] - edgeValue}px)`;
};

export const breakpointOnly = (
    theme: ThemeType,
    breakpoint: string,
    prefix = '@media',
) => breakpointBetween(theme, breakpoint, breakpoint, prefix);

// // Keep in mind that @media is inclusive by the CSS specification.
// export default function createBreakpoints(breakpoints) {
//     const {
//         // The breakpoint **start** at this value.
//         // For instance with the first breakpoint xs: [xs, sm[.
//         values = {
//             xs: 0,
//             sm: 600,
//             md: 960,
//             lg: 1280,
//             xl: 1920,
//         },
//         unit = 'px',
//         step = 5,
//         ...other
//     } = breakpoints;
//
//     function up(key) {
//         const value = typeof values[key] === 'number' ? values[key] : key;
//         return `@media (min-width:${value}${unit})`;
//     }
//
//     function down(key) {
//         const endIndex = keys.indexOf(key) + 1;
//         const upperbound = values[keys[endIndex]];
//
//         if (endIndex === keys.length) {
//             // xl down applies to all sizes
//             return up('xs');
//         }
//
//         const value =
//             typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
//         return `@media (max-width:${value - step / 100}${unit})`;
//     }
//
//     function between(start, end) {
//         const endIndex = keys.indexOf(end);
//
//         if (endIndex === keys.length - 1) {
//             return up(start);
//         }
//
//         return (
//             `@media (min-width:${
//                 typeof values[start] === 'number' ? values[start] : start
//                 }${unit}) and ` +
//             `(max-width:${
//             (endIndex !== -1 &&
//             typeof values[keys[endIndex + 1]] === 'number'
//                 ? values[keys[endIndex + 1]]
//                 : end) -
//             step / 100
//                 }${unit})`
//         );
//     }
//
//     function only(key) {
//         return between(key, key);
//     }
//
//     function width(key) {
//         return values[key];
//     }
//
//     return {
//         keys,
//         values,
//         up,
//         down,
//         between,
//         only,
//         width,
//         ...other,
//     };
// }
