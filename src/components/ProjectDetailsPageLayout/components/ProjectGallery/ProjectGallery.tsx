import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { gap } from '@gannochenko/etc';
import { ObjectLiteral } from '../../../../type';
import { Container } from '../../../Container';
import { ImageViewScope } from '../../../ImageView';

const ProjectGalleryRoot = styled(Container)`
    margin-bottom: 5rem;
`;

const gutter = '1rem';

const ProjectGalleryImages = styled.div`
    ${gap(gutter, gutter)};
    display: flex;
    flex-wrap: wrap;
`;

const ProjectGalleryImage = styled(Img)`
    width: 20rem;
    border-radius: 2px;
    cursor: pointer;
    flex-shrink: 0;
`;

export const ProjectGallery = ({ images, galleryId }: ObjectLiteral) => {
    return (
        <ImageViewScope>
            <ProjectGalleryRoot>
                <ProjectGalleryImages>
                    {images.map((image: any, index: number) => {
                        if (image.galleryId !== galleryId) {
                            return null;
                        }

                        return (
                            <ProjectGalleryImage
                                sizes={image.image.childImageSharp.fluid}
                                key={index}
                            />
                        );
                    })}
                </ProjectGalleryImages>
            </ProjectGalleryRoot>
        </ImageViewScope>
    );
};

ProjectGallery.defaultProps = {
    released: true,
};
