export type ObjectLiteralType<V = any> = { [k: string]: V };

export type ThemeType = ObjectLiteralType;

export type StylePropsType = {
    theme: ThemeType;
};
