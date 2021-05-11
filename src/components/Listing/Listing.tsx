import React, { useCallback, FunctionComponent, useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import copy from 'copy-to-clipboard';

import { Copy } from './style';
import { ListingPropsType } from './type';
import { listingBashTheme, listingDefaultTheme } from './prism-theme';
import { CodeContainer } from './components/CodeContainer';

export const Listing: FunctionComponent<ListingPropsType> = ({ children }) => {
    const [copied, setCopied] = useState(false);
    const { props } = children;

    const className = props.className || '';
    const linesCount = (props.children || '').split('\n').length;

    const matches = className.match(/language-(?<lang>.*)/);
    const { groups: { lang = 'js' } = {} } = matches || {};

    const theme = lang === 'bash' ? listingBashTheme : listingDefaultTheme;
    const wide = lang === 'bash' || linesCount > 30;
    const keyColor = theme.styles[3].style.color;
    const { bashRoot, metastring } = props;

    let blockKey = '';
    if (lang === 'bash') {
        blockKey = '$';
        if (bashRoot) {
            blockKey = '#';
        }
    }

    let file = '';
    if (metastring) {
        const match = metastring.match(/file:([^\s]+)/);
        if (match && match[1]) {
            file = match[1];
        }
    }

    const onCopyClick = useCallback(() => {
        copy(props.children);
        setCopied(true);
    }, [setCopied, copy]);

    return (
        <CodeContainer
            bgColor={theme.plain.backgroundColor!}
            wide={wide}
            codeKeyColor={keyColor!}
            blockKey={blockKey}
            file={file}
        >
            <Copy onClick={onCopyClick} copied={copied} />
            <Highlight
                {...defaultProps}
                theme={theme}
                code={props.children}
                language={lang}
            >
                {({
                    className,
                    style,
                    tokens,
                    getLineProps,
                    getTokenProps,
                }) => (
                    <pre className={`${className} line-numbers`} style={style}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        </CodeContainer>
    );
};
