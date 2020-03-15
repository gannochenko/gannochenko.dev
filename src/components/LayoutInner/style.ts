import styled from 'styled-components';
import { Container } from '../Container';
import { Link } from 'gatsby';

export const Body = styled.div`
    flex-grow: 2;
`;

export const BackContainer = styled(Container)`
    margin-bottom: 2rem;
`;

export const BackLink = styled(Link)`
    text-decoration: none;
    font-size: ${props => props.theme.font.small};
`;
