import React, { FunctionComponent, useMemo } from 'react';

import { RowContainer, Cell } from './style';

import { Props } from './type';

export const Row: FunctionComponent<Props> = ({
    children,
    odd,
    effectTimeoutBase,
    enableEffect = true,
}) => {
    const cells = useMemo(() => {
        return children.map((item, key) => {
            return (
                <Cell
                    key={key}
                    firstShift={key === 0 && odd}
                    last={key === children.length - 1}
                    effectName="fade-enter"
                    effectEaseA="preset:bounce"
                    enableEffect={enableEffect}
                >
                    {item}
                </Cell>
            );
        });
    }, [children, odd, effectTimeoutBase]);

    return <RowContainer>{cells}</RowContainer>;
};
