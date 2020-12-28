import { Ref } from 'react';
import { ImageViewPropsType } from '../type';
import { useImageViewContext } from '../ImageViewContext';

export const useImageView = (
    ref: Ref<unknown>,
    { propA, propB, ...props }: ImageViewPropsType,
) => {
    const contextValue = useImageViewContext();

    return {
        rootProps: {
            ...props, // rest props go to the root node, as before
            ref, // same for the ref
        },
        relativeProps: {},
        imageProps: {
            src: contextValue.src,
        },

        open: contextValue.open,
    };
};
