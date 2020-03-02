import React, { FunctionComponent } from 'react';

import { EffectContainer } from './style';

import { Props } from './type';

export const Effect: FunctionComponent<Props> = ({ children }) => {
    return <EffectContainer>{children}</EffectContainer>;
};
