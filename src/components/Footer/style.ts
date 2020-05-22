import styled from 'styled-components';
import { align, gap } from '@gannochenko/etc';

export const Container = styled.footer`
    position: relative;
    margin: 0;
    padding: 4rem 1rem;
    ${align('center', 'center', 'column')}

    background-color: ${({ theme }) => theme.color.backgroundSecondary};
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.font.small};
    font-weight: 300;
    overflow-x: hidden;
    overflow-y: hidden;
`;

export const Links = styled.div`
    display: flex;
    flex-shrink: 0;
    ${gap('1rem', '1rem')}
`;

export const Contacts = styled.div`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    font-size: ${({ theme }) => theme.font.bigger};
`;

export const Path = styled.div`
    ${({ theme }) => theme.util.media({ xs: 'display: none;' })}
`;

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
    display: flex;
    ${gap(null, '1rem')};
`;

export const NoWrap = styled.div`
    white-space: nowrap;
`;

export const SlashContainer = styled.div`
    ${({ theme }) => theme.util.media({ xs: 'display: none;' })}
`;
