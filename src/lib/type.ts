import { ObjectLiteral } from '../type';

export interface Graphics {
    source?: string;
    author?: string;
    image: any;
}

export interface Node {
    id: string;
    html: string;
    rawMarkdownBody: string;
    frontmatter: {
        graphics: Graphics[];
    };
}

export type ThemeInputType = {
    breakpoints?: {
        values: ObjectLiteral<number>;
        unit?: string;
    };
    utils?: ObjectLiteral;
} & ObjectLiteral;

export type ThemeType = Required<ThemeInputType> &
    ThemeCacheType &
    ObjectLiteral;

type ThemeCacheType = {
    cache: {
        breakpoints: {
            values: number[];
            keys: string[];
        } & ObjectLiteral;
    } & ObjectLiteral;
};
