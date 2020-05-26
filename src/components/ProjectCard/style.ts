import styled from 'styled-components';
import Img from 'gatsby-image';

import { Link } from '../Link';
import { Link as GatsbyLink } from 'gatsby';
import { align } from '@gannochenko/etc';
import { Typography } from '../Typography';

export const ProjectCardRoot = styled.div`
    box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    overflow: hidden;

    transition: transform ease 200ms;
    &:hover {
        transform: translateY(-3px);
    }
`;

export const Image = styled(Img)`
    background-color: #c4c4c4;
    ${({ theme }) =>
        theme.util.media({
            lg: `max-height: 10rem;`,
            md: `max-height: 15rem;`,
            sm: `max-height: 15rem;`,
            xs: `max-height: 10rem;`,
        })}
`;

export const Data = styled.div`
    padding: 1rem;
`;

export const LinkContainer = styled.div`
    ${align('center', 'right')};
    justify-content: space-between;
`;

export const ViewPost = styled(Link)`
    text-align: right;
`;

export const Title = styled(Typography).attrs({ h2: true })`
    margin: 0 0 0.5rem 0;
    min-height: 4rem;
    font-size: ${({ theme }) => theme.fontSize.standard};
    ${({ theme }) =>
        theme.util.media({
            md: 'min-height: 5rem;',
            sm: 'min-height: 0;',
            xs: 'min-height: 0;',
        })}
`;

export const TitleLink = styled(GatsbyLink)`
    color: inherit;
    &:focus,
    &:active,
    &:visited,
    &:hover {
        color: inherit;
    }
    text-decoration: none;
`;

export const Date = styled.div`
    font-size: ${({ theme }) => theme.fontSize.small};
`;
