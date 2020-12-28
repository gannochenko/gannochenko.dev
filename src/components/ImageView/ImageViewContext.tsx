import React, { createContext, FC, useContext, useEffect } from 'react';
import { ObjectLiteralType } from '../../typeComponent';

export const imageViewContextDefaultValue = {
    open: false,
    src: '/static/23361d302162a070a9b889a096ae8b83/bf093/why-the-hell.jpg',
};

type ImageViewContextValueType = typeof imageViewContextDefaultValue;

type ImageViewContextProviderPropsType = ObjectLiteralType & {
    value: ImageViewContextValueType;
};

const ImageViewContext = createContext<ImageViewContextValueType>(
    imageViewContextDefaultValue,
);

export const ImageViewContextProvider: FC<ImageViewContextProviderPropsType> = ({
    children,
    value,
}) => {
    useEffect(() => {
        const onDocumentClick = (event: MouseEvent) => {
            console.log(event);
            console.log(event.target);

            let next = event.target as (Node & ParentNode) | null;
            let safe = 50;
            while (next && safe >= 0) {
                safe -= 1;
                if ((next as HTMLElement).tagName === 'A') {
                    console.log('LINK!');
                    console.log(next);
                    break;
                }
                next = next.parentNode;
            }

            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
        };

        document.addEventListener('click', onDocumentClick);

        return () => document.removeEventListener('click', onDocumentClick);
    }, []);

    return (
        <ImageViewContext.Provider value={value}>
            {children}
        </ImageViewContext.Provider>
    );
};

export const useImageViewContext = () => useContext(ImageViewContext);
