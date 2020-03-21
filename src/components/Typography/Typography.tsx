import React, { FunctionComponent } from 'react';

import { Props } from './type';
import { H1, H2, H3 } from './style';

export const Typography: FunctionComponent<Props> = ({
    sub,
    subSub,
    ...restProps
}) => {
    if (sub) {
        return <H2 {...restProps} />;
    }

    if (subSub) {
        return <H3 {...restProps} />;
    }

    return <H1 {...restProps} />;
};
