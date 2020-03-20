import React from 'react';
import styled from 'styled-components';
import { fgColor } from '@bucket-of-bolts/styled-companion';
import Highlight, { defaultProps } from 'prism-react-renderer';

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
        <p {...props} style={{ marginTop: '2rem', marginBottom: '2rem' }} />
    ),
    pre: (props: any) => (
        <Highlight
            {...defaultProps}
            code={`
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`}
            language="jsx"
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
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
    ),
};
