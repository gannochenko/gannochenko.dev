/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import { start, ids } from './src/lib/effects';

console.log(ids);
// start();
document.write(
    `<script>window.__ids = [${ids.map(id => `"${id}"`).join(',')}]</script>`,
);
