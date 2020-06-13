import React, { FunctionComponent, useState } from 'react';

import { CupRoot, CupImage } from './style';
import { CupFrameNumber, CupPropsType } from './type';

export const Cup: FunctionComponent<CupPropsType> = ({
    children,
    ...restProps
}) => {
    const [frame, setFrame] = useState<CupFrameNumber>(1);

    return (
        <CupRoot>
            <CupImage frameNumber={frame}>{children}</CupImage>
            <button
                onClick={() => {
                    // @ts-ignore
                    setFrame(frame === 1 ? 5 : frame - 1);
                }}
            >
                {'<'}
            </button>
            <button
                onClick={() => {
                    // @ts-ignore
                    setFrame(frame === 5 ? 1 : frame + 1);
                }}
            >
                {'>'}
            </button>
        </CupRoot>
    );
};
