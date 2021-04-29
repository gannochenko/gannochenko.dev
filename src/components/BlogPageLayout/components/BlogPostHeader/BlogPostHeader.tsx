import React, { FunctionComponent, useMemo } from 'react';

import {
    BlogPostHeaderContainer,
    BlogPostHeaderContainerInner,
    Cover,
    IntroBlock,
    Title,
    Date,
    DateStripe,
    InfoStripeContainer,
    BlackLink,
    Dates,
} from './style';
import { Props } from './type';
import { Container } from '../../../Container';
import { Copyright } from '../../../Copyright';
import { formatDate } from '../../../../lib/util';
import { ContentRecordImageType } from '../../../../type';

export const BlogPostHeader: FunctionComponent<Props> = ({ data }) => {
    const headerImage = useMemo<ContentRecordImageType | undefined>(() => {
        return data.frontmatter.images.find((image: any) => image.is_cover);
    }, [data]);

    const { title, date, published, updatedAt } = data.frontmatter;

    return (
        <BlogPostHeaderContainer>
            <BlogPostHeaderContainerInner>
                {!!(headerImage && headerImage.image) && (
                    <Cover sizes={headerImage.image.childImageSharp.fluid} />
                )}
                <IntroBlock>
                    <Container>
                        <Title>{title}</Title>
                    </Container>
                    <DateStripe>
                        <InfoStripeContainer>
                            <BlackLink
                                to={published ? '/blog' : '/blog-drafts'}
                            >
                                &larr; Back to list
                            </BlackLink>
                            <Dates>
                                {!!updatedAt && (
                                    <Date update>
                                        Upd: {formatDate(updatedAt)}
                                    </Date>
                                )}
                                <Date>{formatDate(date)}</Date>
                            </Dates>
                        </InfoStripeContainer>
                    </DateStripe>
                </IntroBlock>
            </BlogPostHeaderContainerInner>
            {!!headerImage && (
                <Copyright
                    author={headerImage.author}
                    source={headerImage.source}
                    sourceText={headerImage.sourceText}
                />
            )}
        </BlogPostHeaderContainer>
    );
};
