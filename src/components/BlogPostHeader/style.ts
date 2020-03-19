import styled from 'styled-components';
import Img from 'gatsby-image';
import { Container } from '../Container';
import { Link } from 'gatsby';

export const BlogPostHeaderContainer = styled.div`
    position: relative;
`;

export const Cover = styled(Img)`
    height: 80vh;
    user-select: none;
`;

export const IntroBlock = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
`;

export const Title = styled.div`
    padding: 2rem 0;
    color: ${props => props.theme.color.textSecondary};
    font-size: 2.5rem;
    ${({ theme }) =>
        theme.util.media({
            sm: `font-size: 1.5rem;`,
            xs: `font-size: 1.5rem;`,
        })}
`;

export const Date = styled.div`
    text-align: right;
    color: ${props => props.theme.color.backgroundSecondary};
    font-size: ${props => props.theme.font.standard};
    font-weight: bold;
    background-color: white;
    padding: 0.3rem 1rem;
`;

export const InfoStripeContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    font-size: ${({ theme }) => theme.font.small};
`;

export const DateStripe = styled.div`
    background-color: ${props => props.theme.color.backgroundSecondary};
`;

export const BlackLink = styled(Link)`
    color: white;
    padding: 0.3rem 1rem 0.3rem 0;
    text-decoration: none;
    font-weight: normal;
`;