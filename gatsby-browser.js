/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import { startEffects } from '@gannochenko/ui';
import { Providers } from './src/components/Providers/Providers';
import { Layout } from './src/components/Layout';

startEffects();

export const wrapPageElement = ({ element, props }) => {
    return (
        <Providers>
            <Layout props={props}>{element}</Layout>
        </Providers>
    );
};
