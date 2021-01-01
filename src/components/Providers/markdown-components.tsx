import React from 'react';
import Img from 'gatsby-image';
import { Container } from '../Container';
import { Typography } from '../Typography';
import { Link } from '../Link';
import { Listing } from '../Listing';
import { HR } from '../HR';
import { InlineCode } from '../InlineCode';

const margins = { marginTop: '2rem', marginBottom: '2rem' };

const ContainedP = (props: any) => (
    <Container>
        <p {...props} style={margins} />
    </Container>
);

const ContainedH1 = (props: any) => (
    <Container>
        <Typography h1 showAnchor {...props} />
    </Container>
);

const ContainedH2 = (props: any) => (
    <Container>
        <Typography h2 showAnchor {...props} />
    </Container>
);

const ContainedH3 = (props: any) => (
    <Container>
        <Typography h3 showAnchor {...props} />
    </Container>
);

const ContainedH4 = (props: any) => (
    <Container>
        <Typography h3 showAnchor {...props} />
    </Container>
);

const ContainedUL = (props: any) => (
    <Container>
        <ul {...props} />
    </Container>
);

const ContainedOL = (props: any) => (
    <Container>
        <ol {...props} />
    </Container>
);

export const markdownComponents = {
    a: Link,
    p: ContainedP,
    h1: ContainedH1,
    h2: ContainedH2,
    h3: ContainedH3,
    h4: ContainedH4,
    ul: ContainedUL,
    ol: ContainedOL,
    hr: HR,
    pre: Listing,
    inlineCode: InlineCode,
    // img: Img,
};
