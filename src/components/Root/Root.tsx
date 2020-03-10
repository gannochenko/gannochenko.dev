import React, { FunctionComponent, ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'styled-components';
// import { Provider as StateProvider } from "unstated"
import { theme, GlobalStyle, LayoutComponents } from '../../style';

export const Root: FunctionComponent<{ element: ReactNode }> = props => {
    const { element } = props;

    console.log(props);

    return (
        <MDXProvider components={LayoutComponents}>
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyle />
                    {element}
                </>
            </ThemeProvider>
        </MDXProvider>
    );
};
