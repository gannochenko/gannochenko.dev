import React, { FunctionComponent } from 'react';

import { NotFoundFrameRoot, Images, Message } from './style';
import { NotFoundFramePropsType } from './type';

export const NotFoundFrame: FunctionComponent<NotFoundFramePropsType> = ({
    children,
    ...restProps
}) => {
    return (
        <NotFoundFrameRoot {...restProps}>
            <Images>{children}</Images>
            <Message>404</Message>
        </NotFoundFrameRoot>
    );
};
