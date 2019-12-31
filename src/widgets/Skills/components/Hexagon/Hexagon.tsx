import React, { FunctionComponent } from 'react';

import { Props } from './type';
import { Shape } from './style';

export const Hexagon: FunctionComponent<Props> = ({ filled }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 471.77 471.77">
            <Shape
                d="M338.57,4.21H134.43A28.25,28.25,0,0,0,110,18.33L7.9,195.13a28.21,28.21,0,0,0,0,28.24L110,400.17a28.25,28.25,0,0,0,24.46,14.12H338.57A28.25,28.25,0,0,0,363,400.17L465.1,223.37a28.21,28.21,0,0,0,0-28.24L363,18.33A28.25,28.25,0,0,0,338.57,4.21Z"
                transform="translate(-0.61 -0.71)"
                filled={filled}
            />
        </svg>
    );
};
