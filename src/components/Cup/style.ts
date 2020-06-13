import styled from 'styled-components';
import { CupPropsType } from './type';

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
    ['5px', '0px'],
    ['17px', '22px'],
    ['15px', '22px'],
    ['17px', '23px'],
    ['19px', '23px'],
];

export const CupRoot = styled.div``;

export const CupImage = styled.div<CupPropsType>`
    background-image: url(${({ frameNumber }) => frames[frameNumber - 1]});
    background-repeat: no-repeat;
    background-size: ${({ frameNumber }) => size[frameNumber - 1].join(' ')};
    background-position: ${({ frameNumber }) =>
        position[frameNumber - 1].join(' ')};
    width: 90px;
    height: 90px;
    cursor: pointer;
`;
