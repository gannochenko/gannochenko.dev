import React, { FunctionComponent, ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'styled-components';
// import { Provider as StateProvider } from "unstated"
import { theme, GlobalStyle } from '../../style';
import { markdownComponents } from './markdown-components';

export const Providers: FunctionComponent<{ element: ReactNode }> = ({
    element,
}) => {
    return (
        <MDXProvider components={markdownComponents}>
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyle />
                    {element}
                </>
            </ThemeProvider>
        </MDXProvider>
    );
};
