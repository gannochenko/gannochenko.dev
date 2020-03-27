import React, { FunctionComponent, useMemo } from 'react';

import { Props } from './type';
import { H1, H2, H3, Anchor } from './style';

export const Typography: FunctionComponent<Props> = ({
    sub,
    subSub,
    children,
    showAnchor,
    ...restProps
}) => {
    const showAnchorTag = showAnchor && (subSub || sub);
    const aKey = useMemo(() => {
        if (!showAnchorTag) {
            return '';
        }

        return children!
            .toString()
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9_-]/g, '');
    }, [showAnchorTag, children]);

    if (sub) {
        return (
            <H2 {...restProps}>
                {children}{' '}
                {showAnchorTag && (
                    <Anchor href={`#${aKey}`} name={aKey}>
                        #
                    </Anchor>
                )}
            </H2>
        );
    }

    if (sub) {
        return (
            <H3 {...restProps}>
                {children}{' '}
                {showAnchor && (
                    <Anchor href={`#${aKey}`} name={aKey}>
                        #
                    </Anchor>
                )}
            </H3>
        );
    }

    return <H1 {...restProps}>{children}</H1>;
};
