import React, { FunctionComponent, ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'styled-components';
// import { Provider as StateProvider } from "unstated"
import { theme, GlobalStyle } from '../../style';

const components = {};

export const Root: FunctionComponent<{ element: ReactNode }> = ({
    element,
}) => {
    return (
        <MDXProvider components={components}>
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyle />
                    {element}
                </>
            </ThemeProvider>
        </MDXProvider>
    );
};
