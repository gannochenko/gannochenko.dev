import { createContext, useContext } from 'react';

export const imageViewContextDefaultValue = {
    open: false,
    src: '/static/23361d302162a070a9b889a096ae8b83/bf093/why-the-hell.jpg',
};

type ImageViewContextValueType = typeof imageViewContextDefaultValue;

const ImageViewContext = createContext<ImageViewContextValueType>(
    imageViewContextDefaultValue,
);

export const ImageViewContextProvider = ImageViewContext.Provider;

export const useImageViewContext = () => useContext(ImageViewContext);
