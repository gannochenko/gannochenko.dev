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
    background-color: black;
    padding: 0.5rem 0;
    z-index: ${zIxEverest};
`;

export const InnerContainer = styled(Container)`
    ${align('center', 'right')}
`;

export const Items = styled.div`
    ${group(null, '1rem')}
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
