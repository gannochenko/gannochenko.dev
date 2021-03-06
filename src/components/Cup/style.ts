import styled, { css } from 'styled-components';
import { CupImagePropsType, CupInnerPropsType, CupRootPropsType } from './type';

const frame1 = require('./assets/frame1.svg') as string;
const frame2 = require('./assets/frame2.svg') as string;
const frame3 = require('./assets/frame3.svg') as string;
const frame4 = require('./assets/frame4.svg') as string;
const frame5 = require('./assets/frame5.svg') as string;

const frames = [frame1, frame2, frame3, frame4, frame5];

const size = [
    ['80px', '80px'],
    ['58px', '58px'],
    ['61px', '61px'],
    ['60px', '60px'],
    ['57px', '57px'],
];

const position = [
    ['3px', '0px'],
    ['17px', '22px'],
    ['15px', '22px'],
    ['17px', '23px'],
    ['19px', '23px'],
];

export const CupRoot = styled.div<CupRootPropsType>`
    position: fixed;
    left: 1rem;
    bottom: 32px;
    cursor: pointer;
    z-index: 500;
    ${({ visible }) =>
        css`
            visibility: ${visible ? 'visible' : 'hidden'};
        `}
    ${({ theme }) => theme.util.media({ '<sm': 'display: none;' })}
`;

const getCupAppearance = ({ frameNumber }: CupImagePropsType) => {
    const frameNumberSafe = frameNumber > 4 ? 4 : frameNumber;

    const bgSize = size[frameNumberSafe];
    const bgPosition = position[frameNumberSafe];

    if (!bgPosition || !bgSize) {
        return '';
    }

    return css`
        background-image: url(${frames[frameNumberSafe]});
        background-size: ${bgSize.join(' ')};
        background-position: ${bgPosition.join(' ')};
    `;
};

export const CupImage = styled.div<CupImagePropsType>`
    background-repeat: no-repeat;
    width: 90px;
    height: 90px;
    ${getCupAppearance}
`;

export const CupRefill = styled.div<{ visible: boolean }>`
    font-size: 0.8rem;
    text-transform: uppercase;
    color: gray;
    font-family: Sriracha, serif;
    background-color: white;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;

export const CupInner = styled.div<CupInnerPropsType>`
    opacity: 1;
    ${({ visible }) =>
        visible
            ? ''
            : css`
                  pointer-events: none;
                  opacity: 0;
              `};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: opacity ease 200ms;
`;

export const CupPreload = styled.div`
    height: 0;
    overflow: hidden;
`;
