import React from 'react';
import styled from 'styled-components';
import { fgColor } from '@bucket-of-bolts/styled-companion';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { theme } from './prism-theme';
import { Container } from '../components/Container';

export const LayoutComponents = {
    a: styled.a`
        ${props =>
            fgColor(
                props.theme.color.link.normal,
                props.theme.color.link.hover,
                props.theme.link.hoverEffectDuration,
            )}
    `,
    p: (props: any) => (
        <Container>
            <p {...props} style={{ marginTop: '2rem', marginBottom: '2rem' }} />
        </Container>
    ),
    pre: (props: any) => {
        const className = props.children.props.className || '';
        const matches = className.match(/language-(?<lang>.*)/);
        const { groups: { lang = 'js' } = {} } = matches || {};

        return (
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
        );
    },
};
