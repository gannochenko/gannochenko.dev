import React, { FunctionComponent } from 'react';
import { Body, BackContainer, BackLink } from './style';
import { Props } from './type';
import { Container, SEO } from '../';
import { Typography } from '../Typography';

export const LayoutInner: FunctionComponent<Props> = props => {
    const {
        children,
        location: { pathname = '' } = {},
        pageContext: {
            frontmatter: {
                title = '',
                backUrl = '',
                keywords = [],
                description = '',
            } = {},
        },
        showTitle,
    } = props;

    const isRoot = pathname === '/';

    return (
        <>
            <SEO title={title} keywords={keywords} description={description} />
            {!!(title && !isRoot && showTitle !== false) && (
                <Container type="standard">
                    <Typography main>{title}</Typography>
                </Container>
            )}
            <Body>{children}</Body>
            {!!backUrl && (
                <BackContainer>
                    <BackLink to={backUrl}>&larr; Go back</BackLink>
                </BackContainer>
            )}
        </>
    );
};

export default LayoutInner;
