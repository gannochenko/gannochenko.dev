import React, { FunctionComponent, useMemo } from 'react';

import { RowContainer, Cell } from './style';

import { Props } from './type';

export const Row: FunctionComponent<Props> = ({
    children,
    odd,
    effectTimeoutBase,
}) => {
    const cells = useMemo(() => {
        return children.map((item, key) => {
            const effectTimeout =
                effectTimeoutBase + Math.ceil(1000 * Math.random());

            return (
                <Cell
                    key={key}
                    firstShift={key === 0 && odd}
                    last={key === children.length - 1}
                    effectTimeout={effectTimeout}
                    effect="fade-slide-bottom"
                >
                    {item}
                </Cell>
            );
        });
    }, [children, odd, effectTimeoutBase]);

    return <RowContainer>{cells}</RowContainer>;
};
