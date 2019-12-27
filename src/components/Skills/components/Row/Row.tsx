import React, { FunctionComponent } from 'react';

import { RowContainer } from './style';

import { Props } from './type';

export const Row: FunctionComponent<Props> = ({ children }) => {
    return <RowContainer>{children}</RowContainer>;
};
