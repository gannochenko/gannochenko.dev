import React, { FunctionComponent } from 'react';

import { ContainerStandard, ContainerWide, ContainerNarrow } from './style';

import { Props } from './type';

/** this container regulates the size of the content **/
export const Container: FunctionComponent<Props> = React.forwardRef<
    HTMLDivElement | undefined,
    Props
>((props, ref) => {
    const { children, type = 'standard' } = props;

    if (type === 'wide') {
        // @ts-ignore
        return (
            <ContainerWide {...props} ref={ref}>
                {children}
            </ContainerWide>
        );
    }
    if (type === 'narrow') {
        // @ts-ignore
        return (
            <ContainerNarrow {...props} ref={ref}>
                {children}
            </ContainerNarrow>
        );
    }
    // @ts-ignore
    return (
        <ContainerStandard {...props} ref={ref}>
            {children}
        </ContainerStandard>
    );
});
