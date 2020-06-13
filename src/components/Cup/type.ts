import { HTMLAttributes } from 'react';

export type CupFrameNumber = 1 | 2 | 3 | 4 | 5;

export type CupPropsType = {
    frameNumber: CupFrameNumber;
    // custom props here
} & HTMLAttributes<HTMLElement>;
