import { ObjectLiteral } from '../type';
import { theme } from './theme';

export interface GridTheme {
    [k: string]: ObjectLiteral<string | number>;
}

export interface ThemeProps {
    theme: typeof theme;
}
