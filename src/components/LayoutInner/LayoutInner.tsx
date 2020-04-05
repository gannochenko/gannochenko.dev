import React, { FunctionComponent } from 'react';
import { Body, BackLink } from './style';
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
                // eslint-disable-next-line @typescript-eslint/camelcase
                show_title = 1,
            } = {},
        },
        showTitle,
    } = props;

    const isRoot = pathname === '/';

    return (
        <>
            <SEO title={title} keywords={keywords} description={description} />
            {/* eslint-disable-next-line @typescript-eslint/camelcase */}
            {!!(
                title &&
                !isRoot &&
                showTitle !== false &&
                show_title !== 0
            ) && (
                <Container type="standard">
                    <Typography main>{title}</Typography>
                </Container>
            )}
            <Body>
                {children}
                {!!backUrl && <BackLink to={backUrl}>&larr; Go back</BackLink>}
            </Body>
        </>
    );
};

export default LayoutInner;
