import React, { FunctionComponent } from 'react';

import {
    StandardBlockContainer,
    Inner,
    ImageSingle,
    ImageWrap,
    Image,
    ImageGalleryGrid,
    ImageGallery,
    GalleryItem,
} from './style';
import { Props } from './type';
import { Copyright } from '../../components/Copyright';
import { withEffects } from '../../lib/effects';
import { Container } from '../../components/Container';

const BlockContainer: FunctionComponent<Props> = props => {
    const { html, effectTimeout, containerType, graphics = [] } = props;

    let timeout = effectTimeout || 0;

    return (
        <StandardBlockContainer {...props}>
            {!!html && (
                <Container type={containerType}>
                    <Inner dangerouslySetInnerHTML={{ __html: html }} />
                </Container>
            )}
            {graphics.length === 1 && graphics[0].image && (
                <ImageSingle>
                    <ImageWrap>
                        <Image
                            sizes={graphics[0].image.childImageSharp.fluid}
                        />
                        <Copyright {...graphics[0]} />
                    </ImageWrap>
                </ImageSingle>
            )}
            {graphics.length > 1 && (
                <ImageGallery>
                    <ImageGalleryGrid>
                        {graphics.map((item, key) => {
                            if (!item.image) {
                                return null;
                            }

                            timeout += 200;
                            return (
                                <GalleryItem
                                    key={key}
                                    effect="fade-slide-top"
                                    effectTimeout={timeout}
                                >
                                    <Image
                                        sizes={item.image.childImageSharp.fluid}
                                    />
                                    <Copyright {...item} />
                                </GalleryItem>
                            );
                        })}
                    </ImageGalleryGrid>
                </ImageGallery>
            )}
        </StandardBlockContainer>
    );
};

export const Block = withEffects(BlockContainer);
