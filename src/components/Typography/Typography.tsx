import React, { FunctionComponent, useMemo } from 'react';

import { Props } from './type';
import { H1, H2, H3, H4, Anchor, Label } from './style';

export const Typography: FunctionComponent<Props> = ({
    h2,
    h3,
    h4,
    label,
    children,
    ...restProps
}) => {
    const trueChildren = useMemo(() => {
        if (typeof children !== 'string') {
            return children;
        }

        return children.replace('{a}', '').trim();
    }, [children]);

    const aKey = useMemo(() => {
        if (!children || typeof children !== 'string') {
            return '';
        }

        if (children.toString().indexOf('{a}') < 0) {
            return '';
        }

        return children
            .toString()
            .replace('{a}', '')
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9_-]/g, '');
    }, [children]);

    let Tag: any = H1;
    if (h2) {
        Tag = H2;
    } else if (h3) {
        Tag = H3;
    } else if (h4) {
        Tag = H4;
    } else if (label) {
        Tag = Label;
    }

    return (
        <Tag {...restProps}>
            {trueChildren}{' '}
            {!!aKey && (
                // @ts-ignore
                <Anchor href={`#${aKey}`} name={aKey}>
                    #
                </Anchor>
            )}
        </Tag>
    );
};
