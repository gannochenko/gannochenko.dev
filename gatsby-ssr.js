/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import { getRenderedNodeIdCollector } from './src/lib/effects';
import { Root } from './src/components/Root/Root';

export const onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([getRenderedNodeIdCollector()]);
};

export const wrapRootElement = Root;
