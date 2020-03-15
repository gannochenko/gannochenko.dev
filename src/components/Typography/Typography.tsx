import React, { FunctionComponent } from 'react';

import { Props } from './type';
import { H1, H2, H3 } from './style';

export const Typography: FunctionComponent<Props> = ({
    children,
    sub,
    subSub,
    className,
}) => {
    if (sub) {
        return <H2 className={className}>{children}</H2>;
    }

    if (subSub) {
        return <H3 className={className}>{children}</H3>;
    }

    return <H1 className={className}>{children}</H1>;
};
