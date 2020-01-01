import React, { FunctionComponent } from 'react';
import { BlockRenderer as Renderer } from '../../lib/block-renderer';

import { BlockRendererContainer } from './style';

import { Props } from './type';

export const BlockRenderer: FunctionComponent<Props> = ({ nodes }) => {
    return (
        <BlockRendererContainer>
            {Renderer.render(nodes || [])}
        </BlockRendererContainer>
    );
};
