import React, { forwardRef, FC } from 'react';
// import PropsTypes from 'prop-types';

import { ImageViewPropsType } from './type';
import {
    ImageViewRoot,
    ImageViewRelative,
    ImageViewImage,
    ImageViewCloseButton,
    ImageViewBackdrop,
    ImageViewCrossLine,
    ImageViewCloseButtonRelative,
} from './style';
import { useImageView } from './hooks/useImageView';
import { useImageViewClassNames } from './hooks/useImageViewClassNames';

export const ImageView: FC<ImageViewPropsType> = forwardRef(function ImageView(
    { className, ...props },
    ref,
) {
    const {
        backDropProps,
        closeButtonProps,
        rootProps,
        relativeProps,
        imageProps,
        open,
    } = useImageView(ref, props);

    const classNames = useImageViewClassNames('ImageView', className);

    if (!open) {
        return null;
    }

    return (
        <>
            <ImageViewBackdrop {...backDropProps} />
            <ImageViewRoot {...rootProps} className={classNames.root}>
                <ImageViewRelative
                    {...relativeProps}
                    className={classNames.relative}
                >
                    <ImageViewImage {...imageProps} />
                    <ImageViewCloseButton {...closeButtonProps}>
                        <ImageViewCloseButtonRelative>
                            <ImageViewCrossLine />
                            <ImageViewCrossLine other />
                        </ImageViewCloseButtonRelative>
                    </ImageViewCloseButton>
                </ImageViewRelative>
            </ImageViewRoot>
        </>
    );
});

ImageView.defaultProps = {};

ImageView.propTypes = {};
