import React, { FunctionComponent, ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'styled-components';
import {
    ImageViewContextProvider,
    imageViewContextDefaultValue,
} from '../ImageView/ImageViewContext';
// import { Provider as StateProvider } from "unstated"
import { theme, GlobalStyle } from '../../style';
import { markdownComponents } from './markdown-components';

export const Providers: FunctionComponent<{ element: ReactNode }> = ({
    element,
}) => {
    return (
        <ImageViewContextProvider value={imageViewContextDefaultValue}>
            <MDXProvider components={markdownComponents}>
                <ThemeProvider theme={theme}>
                    <>
                        <GlobalStyle />
                        {element}
                    </>
                </ThemeProvider>
            </MDXProvider>
        </ImageViewContextProvider>
    );
};
