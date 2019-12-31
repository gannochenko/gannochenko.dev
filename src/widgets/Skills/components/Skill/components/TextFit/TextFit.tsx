import React, { FunctionComponent } from 'react';

import { TextFitContainer } from './style';
import { Props } from './type';

export const TextFit: FunctionComponent<Props> = ({ children, size }) => {
    return <TextFitContainer size={size}>{children}</TextFitContainer>;
};
