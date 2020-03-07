/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import { start } from './src/lib/effects';
import { Root } from './src/components/Root/Root';

start();

export const wrapRootElement = Root;
