import styled, { css } from 'styled-components';
import {
    align,
    group,
    fgColor,
    central,
} from '@bucket-of-bolts/styled-companion';
import { Link } from 'gatsby';
import { zIxEverest } from '@bucket-of-bolts/styled-companion/build';
import { Container } from '../Container';

export const MenuContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.color.backgroundSecondary};
    z-index: ${zIxEverest};
    box-shadow: 0px 6px 30px -8px rgba(0, 0, 0, 0.55);
`;

export const InnerContainer = styled(Container)`
    ${align('center', 'center')};
    justify-content: space-between;
    position: relative;
`;

export const Items = styled.nav`
    ${group(null, '1rem')}
    ${align('center', 'right')}
    ${props =>
        props.theme.util.media({
            xs: css`
                display: none;
            `,
        })}
`;

export const Home = styled(Link)`
    ${align('center', 'center')}
    &:before {
        content: '$ cd ~';
    }
    ${props => css`
        &:active,
        &:focus {
            color: ${props.theme.color.link.altNormal};
        }
    `}
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
    font-size: ${props => props.theme.font.small};
    font-weight: bold;
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
    font-weight: bold;

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
    height: 10px;
    width: 100%;
    display: block;
`;

export const MobileItems = styled.nav<{ open: boolean }>`
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
    position: relative;
    display: block;
    text-decoration: none;
    ${props =>
        fgColor(props.theme.color.textPrimary, props.theme.color.textPrimary)};
    border-bottom: 1px solid ${props => props.theme.color.backgroundSecondary};

    &:before {
        content: '';
        position: absolute;
        width: 0;
        height: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        background-color: ${props => props.theme.color.link.normal};
        transition: width 200ms ease;
    }

    &:hover {
        &:before {
            width: 10px;
        }
    }
`;
