import { theme } from '../../style';
import { SkillItem } from './type';

export const detectRange = () => {
    if (typeof window === 'undefined') {
        return 'lg';
    }

    const windowWidth = window.innerWidth;
    const {
        breakpoints: {
            values: { xs, sm, md, lg },
        },
    } = theme;

    if (windowWidth < xs[1]!) {
        return 'xs';
    }
    if (windowWidth > sm[0] && windowWidth < sm[1]) {
        return 'sm';
    }
    if (windowWidth > md[0] && windowWidth < md[1]) {
        return 'md';
    }
    if (windowWidth > lg[0]!) {
        return 'lg';
    }

    return 'xs';
};

export const getDimensions = (range: string) => {
    // lg || md
    let result = {
        even: 4,
        odd: 3,
    };

    if (range === 'sm') {
        result = {
            even: 3,
            odd: 2,
        };
    }

    if (range === 'xs') {
        result = {
            even: 2,
            odd: 1,
        };
    }

    return result;
};

export const getGrid = (data: SkillItem[], range: string) => {
    const dimensions = getDimensions(range);

    const result: SkillItem[][] = [];

    if (data.length === 2) {
        result.push([data[0]]);
        result.push([data[1]]);

        return result;
    }

    if (data.length === 4) {
        if (dimensions.even === 2) {
            result.push([data[0], data[1]]);
            result.push([data[2]]);
            result.push([data[3]]);
        } else {
            result.push([data[0], data[1]]);
            result.push([data[2], data[3]]);
        }

        return result;
    }

    if (data.length === 5) {
        if (dimensions.even === 2) {
            result.push([data[0], data[1]]);
            result.push([data[2]]);
            result.push([data[3], data[4]]);
        } else {
            result.push([data[0], data[1], data[2]]);
            result.push([data[3], data[4]]);
        }

        return result;
    }

    if (data.length === 6) {
        if (dimensions.even === 4) {
            result.push([data[0], data[1], data[2]]);
            result.push([data[3], data[4], data[5]]);

            return result;
        } else if (dimensions.even === 3) {
            result.push([data[0], data[1], data[2]]);
            result.push([data[3], data[4]]);
            result.push([
                {
                    key: `empty_${Math.random()}`,
                    logo: '',
                },
                data[5],
            ]);

            return result;
        }
    }

    let lineNumber = 0;
    let line: SkillItem[] = [];
    for (let i = 0; i < data.length; i += 1) {
        const isEven = !(lineNumber % 2);
        const dimension = isEven ? dimensions.even : dimensions.odd;

        line.push(data[i]);
        if (line.length >= dimension) {
            lineNumber += 1;
            result.push(line);
            line = [];
        }
    }

    if (line.length) {
        result.push(line);
    }

    if (dimensions.even === 4 && result.length % 2) {
        const lastLine = result[result.length - 1];
        if (lastLine.length === 1) {
            lastLine.unshift({
                key: `empty_${Math.random()}`,
                logo: '',
            });
        } else if (lastLine.length === 2) {
            lastLine.unshift({
                key: `empty_${Math.random()}`,
                logo: '',
            });
        } else if (lastLine.length === 3) {
            lastLine.unshift({
                key: `empty_${Math.random()}`,
                logo: '',
            });
            const veryLast = lastLine.pop()!;
            result.push([
                {
                    key: `empty_${Math.random()}`,
                    logo: '',
                },
                veryLast,
            ]);
        }
    }

    return result;
};
