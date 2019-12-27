import { ReactNode } from 'react';

export interface Props {
    children?: ReactNode;
    logo: string;
    title?: string;
    size?: string;
    width?: string;
    isRound?: boolean;
    offsetX?: string;
    effectTimeout?: number;
}
