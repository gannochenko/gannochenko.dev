import { css } from 'styled-components';

export type ScalarType = string | number;
export type MarginPropsType = Partial<{
    margin: ScalarType;
    marginTop: ScalarType;
    marginBottom: ScalarType;
    marginLeft: ScalarType;
    marginRight: ScalarType;
}>;

const getValue = (value?: ScalarType) => {
    if (typeof value === 'string') {
        return value;
    }
    // in case of number, can do something fun here,
    // like converting spacing unit to pixels, or pixels to rem
    return value;
};

const getStyleFor = (property: string, value?: ScalarType) =>
    value !== undefined ? `${property}: ${getValue(value)};` : '';

export const getMarginStyle = ({
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
}: MarginPropsType) => css`
    ${getStyleFor('margin', margin)};
    ${getStyleFor('margin-top', marginTop)};
    ${getStyleFor('margin-bottom', marginBottom)};
    ${getStyleFor('margin-left', marginLeft)};
    ${getStyleFor('margin-right', marginRight)};
`;
