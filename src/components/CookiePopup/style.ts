import styled from 'styled-components';
import { backgroundCover } from '@bucket-of-bolts/styled-companion';
const cookies = require('../../../static/assets/aux/cookies.jpg') as string;

export const CookiePopupContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    position: fixed;
    right: 0;
    bottom: 1rem;
    background-color: white;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.1);
`;

export const Picture = styled.div`
    ${backgroundCover(cookies)};
    width: 7rem;
    ${({ theme }) => theme.util.media({ xs: 'display: none;' })}
`;

export const Text = styled.div`
    padding: 1rem 2rem;
    font-size: ${({ theme }) => theme.font.small};
`;
