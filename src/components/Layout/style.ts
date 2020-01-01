import styled from 'styled-components';
import { Container } from '../Container';
import { Link } from 'gatsby';

export const Main = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Body = styled.div`
    flex-grow: 2;
`;

export const Title = styled.h1`
    margin-top: 1rem;
`;

export const BackContainer = styled(Container)`
    margin-bottom: 2rem;
`;

export const BackLink = styled(Link)`
    text-decoration: none;
`;
