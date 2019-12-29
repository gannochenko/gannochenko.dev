import React, { FunctionComponent } from 'react';

import { TextFitContainer } from './style';

import { Props } from './type';

// https://css-tricks.com/fitting-text-to-a-container/
export const TextFit: FunctionComponent<Props> = ({ text }) => {
    return (
        <TextFitContainer>
            <svg viewBox="0 0 56 18">
                <text x="0" y="15">
                    Fit Me
                </text>
            </svg>
        </TextFitContainer>
    );
};
