import React, { FunctionComponent, useMemo } from 'react';

import {
    ProjectCardRoot,
    Image,
    Data,
    LinkContainer,
    ViewPost,
    Title,
    Date,
    TitleLink,
} from './style';
import { Props } from './type';
import { getYear } from '../../lib/util';
import { Link } from 'gatsby';

export const ProjectCard: FunctionComponent<Props> = ({ data }) => {
    const image = useMemo(() => {
        return (
            data.frontmatter.images.find((image: any) => image.is_cover) || {}
        );
    }, [data]);

    const url = data.frontmatter.path;

    return (
        <ProjectCardRoot>
            <Link to={url}>
                <Image sizes={image.image.childImageSharp.fluid} />
            </Link>
            <Data>
                <Title>
                    <TitleLink to={url}>{data.frontmatter.title}</TitleLink>
                </Title>
                <LinkContainer>
                    <Date>
                        First released in {getYear(data.frontmatter.date)}
                    </Date>
                    <ViewPost to={url} fontSize="small">
                        View details
                    </ViewPost>
                </LinkContainer>
            </Data>
        </ProjectCardRoot>
    );
};
