import styled from 'styled-components';
import { align, group, fgColor } from '@bucket-of-bolts/styled-companion';
import { Link } from 'gatsby';
import { Container } from '../Container';
import { zIxEverest } from '@bucket-of-bolts/styled-companion/build';

export const MenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.color.backgroundSecondary};
    padding: 0.5rem 0;
    z-index: ${zIxEverest};
    box-shadow: 0px 6px 30px -8px rgba(0, 0, 0, 0.55);
`;

export const InnerContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
`;

export const Items = styled.div`
    ${group(null, '1rem')}
    ${align('center', 'right')}
`;

export const Item = styled(Link)`
    ${fgColor('white', 'white')};
    text-transform: uppercase;
    text-decoration: none;
    position: relative;
    padding-bottom: 5px;

    &:after {
        content: '';
        display: block;
        height: 3px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 30%;
        background-color: white;
    }
`;

export const Underline = styled.div`
    content: '';
    display: block;
    height: 3px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const Home = styled(Link)`
    &:before {
        content: 'cd ~';
    }
    color: ${props => props.theme.color.textSecondary};
    text-decoration: none;
`;
