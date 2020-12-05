import React from 'react';
import { Container } from '../Container';
import { Typography } from '../Typography';
import { Link } from '../Link';
import { Listing } from '../Listing';
import { HR } from '../HR';
import { InlineCode } from '../InlineCode';

const margins = { marginTop: '2rem', marginBottom: '2rem' };

export const markdownComponents = {
    a: Link,
    p: (props: any) => (
        <Container>
            <p {...props} style={margins} />
        </Container>
    ),
    h1: (props: any) => (
        <Container>
            <Typography h1 showAnchor {...props} />
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
    hr: () => <HR />,
    pre: Listing,
    inlineCode: InlineCode,
};
