import React, { FunctionComponent } from 'react';

import { SlashContainer } from './style';
import { Props } from './type';

export const Slash: FunctionComponent<Props> = () => {
    return (
        <SlashContainer
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 76.17 249.94"
        >
            <path
                className="cls-1"
                d="M14.44,251.14,3.13,251a1.35,1.35,0,0,1-1-1.63L64.26,2.26a1.35,1.35,0,0,1,1.63-1l11.38,0a1.35,1.35,0,0,1,1,1.63L16.07,250.16A1.35,1.35,0,0,1,14.44,251.14Z"
                transform="translate(-2.11 -1.24)"
            />
        </SlashContainer>
    );
};
