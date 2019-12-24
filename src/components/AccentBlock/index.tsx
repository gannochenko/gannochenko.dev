import React, { FunctionComponent } from 'react';

import { withEffects } from '../../lib/effects';
import { AccentBlockContainer, Inner, Dash } from './style';
import { Props } from './type';

const AccentBlockComponent: FunctionComponent<Props> = props => {
    const { data, fontSize = 'large' } = props;

    return (
        <AccentBlockContainer fontSize={fontSize} {...props}>
            <Dash />
            <Inner dangerouslySetInnerHTML={{ __html: data }} />
            <Dash bottom />
        </AccentBlockContainer>
    );
};

export const AccentBlock = withEffects(AccentBlockComponent);
