import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import {
    listingDefaultTheme,
    listingBashTheme,
} from '../BlogPageLayout/prism-theme';
import { Container } from '../Container';
import { CodeContainer } from '../BlogPageLayout/components/CodeContainer';
import { Typography } from '../Typography';
import { Link } from '../Link';

const margins = { marginTop: '2rem', marginBottom: '2rem' };

export const markdownComponents = {
    a: Link,
    p: (props: any) => (
        <Container>
            <p {...props} style={margins} />
        </Container>
    ),
    h2: (props: any) => (
        <Container>
            <Typography h2 showAnchor {...props} />
        </Container>
    ),
    h3: (props: any) => (
        <Container>
            <Typography h3 showAnchor {...props} />
        </Container>
    ),
    h4: (props: any) => (
        <Container>
            <Typography h3 showAnchor {...props} />
        </Container>
    ),
    ul: (props: any) => (
        <Container>
            <ul {...props} />
        </Container>
    ),
    ol: (props: any) => (
        <Container>
            <ol {...props} />
        </Container>
    ),
    pre: (props: any) => {
        const className = props.children.props.className || '';
        const matches = className.match(/language-(?<lang>.*)/);
        const { groups: { lang = 'js' } = {} } = matches || {};

        const theme = lang === 'bash' ? listingBashTheme : listingDefaultTheme;
        const keyColor = theme.styles[3].style.color;
        const { bashRoot } = props.children.props;

        let blockKey = '';
        if (lang === 'bash') {
            blockKey = '$';
            if (bashRoot) {
                blockKey = '#';
            }
        }

        return (
            <CodeContainer
                bgColor={theme.plain.backgroundColor!}
                codeKeyColor={keyColor!}
                blockKey={blockKey}
            >
                <Highlight
                    {...defaultProps}
                    theme={theme}
                    code={props.children.props.children}
                    language={lang}
                >
                    {({
                        className,
                        style,
                        tokens,
                        getLineProps,
                        getTokenProps,
                    }) => (
                        <pre
                            className={`${className} line-numbers`}
                            style={style}
                        >
                            {tokens.map((line, i) => (
                                <div {...getLineProps({ line, key: i })}>
                                    {line.map((token, key) => (
                                        <span
                                            {...getTokenProps({ token, key })}
                                        />
                                    ))}
                                </div>
                            ))}
                        </pre>
                    )}
                </Highlight>
            </CodeContainer>
        );
    },
};
