import styled, { css } from 'styled-components';
import {
    align,
    group,
    fgColor,
    central,
} from '@bucket-of-bolts/styled-companion';
import { Link } from 'gatsby';
import { zIxEverest } from '@bucket-of-bolts/styled-companion/build';

export const MenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.color.backgroundSecondary};
    z-index: ${zIxEverest};
    box-shadow: 0px 6px 30px -8px rgba(0, 0, 0, 0.55);
`;

export const InnerContainer = styled.div`
    ${align('center', 'center')};
    justify-content: space-between;

    ${central()};
    position: relative;
    padding: 0 1rem;
`;

export const Items = styled.div`
    ${group(null, '1rem')}
    ${align('center', 'right')}
    ${props =>
        props.theme.util.media({
            xs: css`
                display: none;
            `,
        })}
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
    ${align('center', 'center')}
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
    flex-shrink: 0;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 0.8rem;
`;

export const Right = styled.div`
    ${align('center', 'center')};
    flex-shrink: 0;
    position: relative;
`;

export const Hamburger = styled.div`
    ${align('center', 'center', 'column')};
    width: 2.5rem;
    height: 2.5rem;
    ${group('0.2rem', null)};
    padding: 0.5rem;
    cursor: pointer;
    ${props =>
        props.theme.util.media({
            sm: css`
                display: none;
            `,
            md: css`
                display: none;
            `,
            lg: css`
                display: none;
            `,
        })}
`;

export const Bar = styled.div`
    background-color: ${props => props.theme.color.backgroundPrimary};
    height: 0.2rem;
    width: 100%;
    display: block;
`;

export const MobileItems = styled.div<{ open: boolean }>`
    background-color: white;
    position: absolute;
    top: 100%;
    right: ${props => (props.open ? '0' : '-100%')};
    width: 100%;
    height: 100vh;
    overflow: hidden;
    transition: right ease 200ms;
`;

export const MobileItem = styled(Link)`
    padding: 1rem 2rem;
    display: block;
    text-decoration: none;
    &:not(:first-child) {
        border-top: 1px solid ${props => props.theme.color.backgroundSecondary};
    }
`;
