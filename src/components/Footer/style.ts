import styled from 'styled-components';
import { align, group } from '@bucket-of-bolts/styled-companion';

export const Container = styled.div`
    position: relative;
    margin: 0;
    padding: 2rem 1rem;
    ${props => props.theme.util.media({ xs: 'padding: 1rem;' })}
    ${align('center', 'center', 'column')}

    background-color: ${props => props.theme.color.backgroundSecondary};
    color: ${props => props.theme.color.textSecondary};
    font-size: ${props => props.theme.font.small};
    font-weight: 300;
`;

export const Links = styled.div`
    display: flex;
    ${group('1rem', '1rem')}
`;

export const Contacts = styled.div`
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.font.bigger};
`;

export const Path = styled.div``;

export const FF = styled.span<{ show: boolean }>`
    opacity: ${props => (props.show ? '1' : '0')};
    transition: opacity 200ms ease;
`;

export const AT = styled.span<{ show: boolean }>`
    opacity: ${props => (props.show ? '1' : '0')};
    transition: opacity 200ms ease;
`;

export const Info = styled.div`
    margin-top: 1rem;
`;

export const NoWrap = styled.div`
    white-space: nowrap;
`;
