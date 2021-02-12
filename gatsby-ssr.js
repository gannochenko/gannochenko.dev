/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';
import { getRenderedEffectNodeIdCollector } from '@gannochenko/ui';
import { Providers } from './src/components/Providers/Providers';
import { Layout } from './src/components/Layout';

export const onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([getRenderedEffectNodeIdCollector()]);
};

export const wrapPageElement = ({ element, props }) => {
    return (
        <Providers>
            <Layout props={props}>{element}</Layout>
        </Providers>
    );
};
