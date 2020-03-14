import styled from 'styled-components';
import Img from 'gatsby-image';

export const BlogPostCardContainer = styled.div`
    box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.1);
`;

export const Image = styled(Img)`
    background-color: #c4c4c4;
    min-height: 5rem;
`;

export const Data = styled.div`
    padding: 1rem;
`;
