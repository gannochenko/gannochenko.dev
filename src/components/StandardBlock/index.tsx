import React, { FunctionComponent, useMemo } from 'react';

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
import { Copyright } from '../Copyright';
import { withEffects } from '../../lib/effects';
import { BlockParser } from '../../lib/block-parser';

const StandardBlockComponent: FunctionComponent<Props> = props => {
    let { fontSize = 'standard', width = 'auto', graphics = [] } = props;

    const { html, effectTimeout } = props;

    graphics = graphics || [];
    fontSize = fontSize || 'standard';
    width = width || 'auto';

    let timeout = effectTimeout || 0;

    const blocks = useMemo(() => {
        const res = BlockParser.parse(html);
        // console.log(res);
        return res;
    }, [html]);

    return (
        <StandardBlockContainer {...props}>
            STD
            {!!html && (
                <Inner
                    dangerouslySetInnerHTML={{ __html: html }}
                    fontSize={fontSize}
                    width={width}
                />
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

export const StandardBlock = withEffects(StandardBlockComponent);
