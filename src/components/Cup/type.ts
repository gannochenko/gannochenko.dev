import { HTMLAttributes, MutableRefObject } from 'react';

export type CupFrameNumber = number;

export type CupPropsType = {
    verticalConstraint: MutableRefObject<HTMLDivElement | null>;
    // custom props here
} & HTMLAttributes<HTMLElement>;

export type CupRootPropsType = {
    visible?: boolean;
};
export type CupImagePropsType = { frameNumber: CupFrameNumber };

export type CupInnerPropsType = {
    visible: boolean;
};
