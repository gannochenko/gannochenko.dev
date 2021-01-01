import React, {
    createContext,
    FC,
    useContext,
    useEffect,
    useReducer,
    useMemo,
} from 'react';
import { ObjectLiteralType } from '../../typeComponent';

const initialState = {
    open: false,
    src: '',
};

const defaultContextValue = {
    state: initialState,
    dispatch: () => {},
};

type ImageViewStateAction = {
    type: 'open' | 'close';
    value?: string | null;
};

type ImageViewContextStateType = typeof initialState;

type ImageViewContextValueType = {
    state: typeof initialState;
    dispatch: (action: ImageViewStateAction) => void;
};

type ImageViewContextProviderPropsType = ObjectLiteralType & {};

const ImageViewContext = createContext<ImageViewContextValueType>(
    defaultContextValue,
);

function reducer(
    state: ImageViewContextStateType,
    action: ImageViewStateAction,
) {
    switch (action.type) {
        case 'open':
            return {
                ...state,
                open: true,
                src: action.value,
            };
        case 'close':
            return {
                ...state,
                open: false,
            };
        default:
            return state;
    }
}

const isImage = (url?: string | null) =>
    url &&
    url.startsWith('/static/') &&
    (url.endsWith('.png') || url.endsWith('.jpg'));

export const ImageViewContextProvider: FC<ImageViewContextProviderPropsType> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const onDocumentClick = (event: MouseEvent) => {
            let next = event.target as (Node & ParentNode) | null;
            let safe = 50;
            let prevent = false;
            while (next && safe >= 0) {
                safe -= 1;

                const tagName = (next as HTMLElement).tagName;

                if (tagName === 'A') {
                    const classNames = (next as HTMLElement).classList;
                    const href = (next as HTMLElement).getAttribute('href');

                    if (classNames.contains('gatsby-resp-image-link')) {
                        // mdx inline image
                        if (isImage(href)) {
                            dispatch({
                                type: 'open',
                                value: href,
                            });
                            prevent = true;
                        }
                    }

                    break;
                }

                if (tagName === 'PICTURE') {
                    const image = (next as HTMLElement).querySelector('img');
                    if (image) {
                        const src = image.getAttribute('src');
                        if (isImage(src)) {
                            const scope = image.closest('.image-value-scope');
                            if (scope) {
                                dispatch({
                                    type: 'open',
                                    value: src,
                                });
                            }
                            prevent = true;
                        }
                    }
                    break;
                }

                next = next.parentNode;
            }

            if (prevent) {
                event.preventDefault();
                event.stopImmediatePropagation();
            }
        };

        document.addEventListener('click', onDocumentClick);

        return () => document.removeEventListener('click', onDocumentClick);
    }, []);

    const contextValue = useMemo(
        () => ({
            state,
            dispatch,
        }),
        [state, dispatch],
    );

    return (
        <ImageViewContext.Provider value={contextValue}>
            {children}
        </ImageViewContext.Provider>
    );
};

export const useImageViewContext = () => useContext(ImageViewContext);
