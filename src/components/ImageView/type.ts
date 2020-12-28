import { HTMLAttributes } from 'react';
import { StylePropsType, ObjectLiteralType } from '../../typeComponent';
import { MarginPropsType } from '../../util/getMarginStyle';

export type ImageViewPropsType = HTMLAttributes<HTMLDivElement> &
    Partial<{
        // put your custom props here
    }> &
    MarginPropsType &
    ObjectLiteralType;

export type ImageViewRootPropsType = StylePropsType & ImageViewPropsType;

export type ImageViewInnerNodePropsType = StylePropsType & ObjectLiteralType;
