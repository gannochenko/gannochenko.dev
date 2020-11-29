import styled from 'styled-components';
import { align, gap } from '@gannochenko/etc';

export const FooterRoot = styled.footer`
    position: relative;
    margin: 0;
    padding: 2rem 1rem;
    ${align('center', 'center', 'column')}

    background-color: ${({ theme }) => theme.color.backgroundSecondary};
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: 300;
    overflow-x: hidden;
    overflow-y: hidden;
    flex-shrink: 0;
`;

export const Links = styled.div`
    display: flex;
    flex-shrink: 0;
    ${gap(null, '1rem')}
`;

export const FooterContacts = styled.div`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.bigger};
`;

export const Path = styled.div`
    ${({ theme }) => theme.util.media({ xs: 'display: none;' })}
`;

export const END = styled.div<{ show: boolean }>`
    display: inline-block;
    width: 2rem;
    opacity: ${props => (props.show ? '1' : '0')};
    transition: opacity 200ms ease;
`;

export const AT = styled.span<{ show: boolean }>`
    opacity: ${props => (props.show ? '1' : '0')};
    transition: opacity 200ms ease;
`;

export const FooterLinks = styled.div`
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

export const CICDLink = styled.a`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 20px;
    height: 20px;
    cursor: default;
    ${({ theme }) => theme.util.media({ '<sm': 'display: none;' })}
`;

export const AnalyticsLink = styled.a`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20px;
    height: 20px;
    cursor: default;
    ${({ theme }) => theme.util.media({ '<sm': 'display: none;' })}
`;
