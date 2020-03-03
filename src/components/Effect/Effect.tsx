import React, { FunctionComponent } from 'react';

import { EffectContainer } from './style';
import { Props } from './type';

export const Effect: FunctionComponent<Props> = ({
    children,
    name,
    timeout,
}) => {
    return (
        <EffectContainer effectTimeout={timeout} effectName={name}>
            {children}
        </EffectContainer>
    );
};
