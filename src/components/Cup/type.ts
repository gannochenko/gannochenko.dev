import { HTMLAttributes, MutableRefObject } from 'react';

export type CupFrameNumber = 1 | 2 | 3 | 4 | 5;

export type CupPropsType = {
    frameNumber: CupFrameNumber;
    verticalConstraint: MutableRefObject<HTMLDivElement | null>;
    // custom props here
} & HTMLAttributes<HTMLElement>;

export type CupRootPropsType = {};
export type CupImagePropsType = Pick<CupPropsType, 'frameNumber'>;

export type CupInnerPropsType = {
    visible: boolean;
};
