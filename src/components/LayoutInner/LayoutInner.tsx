/* eslint-disable @typescript-eslint/camelcase */

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
                images = [],
            } = {},
        },
        showTitle,
    } = props;

    const isRoot = pathname === '/';
    const displayTitle =
        title && !isRoot && showTitle !== false && show_title !== 0;

    let coverImage = images.find((image: any) => image.is_cover);
    if (coverImage) {
        if (typeof coverImage.image === 'string') {
            coverImage = coverImage.image;
        } else if (coverImage.image.childImageSharp) {
            coverImage = coverImage.image.childImageSharp.fluid.src;
        } else {
            coverImage = '';
        }
    }

    return (
        <>
            <SEO
                title={title}
                keywords={keywords}
                description={description}
                image={coverImage ? coverImage : '/assets/avatar.jpg'}
            />
            {displayTitle && (
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
