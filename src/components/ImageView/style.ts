import styled, { css } from 'styled-components';

import { ImageViewRootPropsType, ImageViewInnerNodePropsType } from './type';

import { getMarginStyle } from '../../util/getMarginStyle';
import { getResetStyle } from '../../util/getResetStyle';
import { align, fixedCover } from '@gannochenko/etc';

// all unwanted custom props should be blacklisted
const customProps = {
    other: true,
};

const getRootStyle = ({ propA, propB }: ImageViewRootPropsType) => {
    let result = {};

    if (propA) {
        result = css`
            ${result};
            color: grey;
            // some other css
        `;
    }

    if (propB) {
        result = css`
            ${result};
            display: none;
            // some other css
        `;
    }

    // maybe some other props

    return result;
};

export const ImageViewRoot = styled.div.withConfig({
    shouldForwardProp: (prop: string) => !(prop in customProps),
})<ImageViewRootPropsType>`
    ${getResetStyle};

    ${fixedCover()};
    z-index: 1500;
    ${align('center', 'center')};

    ${getRootStyle};
    ${getMarginStyle};
`;

export const ImageViewBackdrop = styled.div`
    ${getResetStyle};

    ${fixedCover()};
    background-color: rgba(0, 0, 0, 0.73);
    z-index: 1499;
`;

export const ImageViewRelative = styled.div<ImageViewInnerNodePropsType>`
    ${getResetStyle};
    position: relative;
`;

export const ImageViewImage = styled.img`
    max-height: 95vh;
    max-width: calc(~'100vw - 100px');
    border: 1px solid #fdfdfd;
    border-radius: 2px;
    overflow: hidden;
`;

export const ImageViewCloseButton = styled.div`
    position: absolute;
    top: 0;
    right: -35px;
`;

export const ImageViewCloseButtonRelative = styled.div`
    position: relative;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
`;

export const ImageViewCrossLine = styled.div.withConfig({
    shouldForwardProp: (prop: string) => !(prop in customProps),
})<{ other?: boolean }>`
    height: 5px;
    background-color: #fdfdfd;
    border-radius: 1px;
    width: 1.5rem;
    transform: rotate(
        ${({ other }: { other?: boolean }) => (other ? '-' : '')}45deg
    );
    position: absolute;
    top: calc(50% - 3px);
    left: 0;
`;
