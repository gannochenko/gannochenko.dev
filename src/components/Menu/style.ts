import styled, { css } from 'styled-components';
import {
    align,
    group,
    fgColor,
    central,
} from '@bucket-of-bolts/styled-companion';
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

export const InnerContainer = styled.div`
    display: flex;
    justify-content: space-between;

    ${central()}
    padding: 0 1rem;
    position: relative;
`;

export const Items = styled.div`
    ${group(null, '1rem')}
    ${align('center', 'right')}
`;

export const Item = styled(Link)`
    ${props =>
        fgColor(
            props.theme.color.link.altNormal,
            props.theme.color.link.altNormal,
        )};
    text-transform: uppercase;
    text-decoration: none;
    position: relative;
    padding-bottom: 3px;
    font-size: ${props => props.theme.font.small};

    &:after {
        content: '';
        display: block;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        background-color: white;
        transition: width ease 200ms;
    }

    &:hover {
        &:after {
            width: 100%;
        }
    }
`;

export const Home = styled(Link)`
    &:before {
        content: '$ cd ~';
    }
    ${props =>
        fgColor(
            props.theme.color.link.altNormal,
            props.theme.color.link.altHover,
            props.theme.link.hoverEffectDuration,
        )};
    text-decoration: none;
`;
