import React, { FunctionComponent, useMemo } from 'react';

import { Props } from './type';
import { H1, H2, H3, H4, Anchor } from './style';

export const Typography: FunctionComponent<Props> = ({
    h2,
    h3,
    h4,
    children,
    showAnchor,
    ...restProps
}) => {
    const showAnchorTag = showAnchor && (h3 || h2);
    const aKey = useMemo(() => {
        if (!showAnchorTag || !children) {
            return '';
        }

        return children
            .toString()
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9_-]/g, '');
    }, [showAnchorTag, children]);

    let Tag = H1;
    if (h2) {
        Tag = H2;
    } else if (h3) {
        Tag = H3;
    } else if (h4) {
        Tag = H4;
    }

    return (
        <Tag {...restProps}>
            {children}{' '}
            {showAnchorTag && (
                // @ts-ignore
                <Anchor href={`#${aKey}`} name={aKey}>
                    #
                </Anchor>
            )}
        </Tag>
    );
};
