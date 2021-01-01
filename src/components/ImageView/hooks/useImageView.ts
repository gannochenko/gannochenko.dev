import { Ref, useCallback, MouseEvent } from 'react';
import { ImageViewPropsType } from '../type';
import { useImageViewContext } from '../ImageViewContext';

export const useImageView = (ref: Ref<unknown>, props: ImageViewPropsType) => {
    const { state, dispatch } = useImageViewContext();

    const onCloseClick = useCallback(
        (event: MouseEvent<unknown>) => {
            dispatch({
                type: 'close',
            });
        },
        [dispatch],
    );

    return {
        backDropProps: {
            onClick: onCloseClick,
        },
        rootProps: {
            ...props, // rest props go to the root node, as before
            ref, // same for the ref
        },
        relativeProps: {},
        imageProps: {
            src: state.src,
        },
        closeButtonProps: {
            onClick: onCloseClick,
        },

        open: state.open,
    };
};
