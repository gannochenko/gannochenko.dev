/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';
import { start } from './src/lib/effects';

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
    setPostBodyComponents([
        <script
            key="effects"
            dangerouslySetInnerHTML={{
                __html: `console.log(document.querySelectorAll('.effects-node'));`,
            }}
        />,
    ]);
};
