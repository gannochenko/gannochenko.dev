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
} from './style';
import { Props } from './type';
import { Container } from '../../../Container';
import { Copyright } from '../../../Copyright';
import { formatDate } from '../../../../lib/util';

export const BlogPostHeader: FunctionComponent<Props> = ({ data }) => {
    const headerImage = useMemo(() => {
        return data.frontmatter.images.find((image: any) => image.is_cover);
    }, [data]);

    const { title, date } = data.frontmatter;

    return (
        <BlogPostHeaderContainer>
            <BlogPostHeaderContainerInner>
                <Cover sizes={headerImage.image.childImageSharp.fluid} />
                <IntroBlock>
                    <Container>
                        <Title>{title}</Title>
                    </Container>
                    <DateStripe>
                        <InfoStripeContainer>
                            <BlackLink to="/blog">
                                &larr; Back to list
                            </BlackLink>
                            <Date>{formatDate(date)}</Date>
                        </InfoStripeContainer>
                    </DateStripe>
                </IntroBlock>
            </BlogPostHeaderContainerInner>
            <Copyright
                author={headerImage.author}
                source={headerImage.source}
                sourceText={headerImage.sourceText}
            />
        </BlogPostHeaderContainer>
    );
};
