import React, { FunctionComponent } from 'react';

import { ContainerStandard, ContainerWide, ContainerNarrow } from './style';

import { Props } from './type';

/** this container regulates the size of the content **/
export const Container: FunctionComponent<Props> = ({ children, type }) => {
    if (type === 'wide') {
        return <ContainerWide>{children}</ContainerWide>;
    }
    if (type === 'narrow') {
        return <ContainerNarrow>{children}</ContainerNarrow>;
    }
    return <ContainerStandard>{children}</ContainerStandard>;
};
