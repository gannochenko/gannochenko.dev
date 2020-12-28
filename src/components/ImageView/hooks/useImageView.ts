import { Ref } from 'react';
import { ImageViewPropsType } from '../type';

export const useImageView = (
    ref: Ref<unknown>,
    { propA, propB, ...props }: ImageViewPropsType,
) => {
    return {
        rootProps: {
            ...props, // rest props go to the root node, as before
            ref, // same for the ref
        },
        relativeProps: {},
    };
};
