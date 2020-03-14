import React, { FunctionComponent } from 'react';

import { Props } from './type';

export const Typography: FunctionComponent<Props> = ({
    children,
    sub,
    subSub,
}) => {
    if (sub) {
        return <h2>{children}</h2>;
    }

    if (subSub) {
        return <h3>{children}</h3>;
    }

    return <h1>{children}</h1>;
};
