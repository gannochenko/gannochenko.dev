import { ReactNode } from 'react';

export interface Props {
    children?: ReactNode;
}

export interface SkillItem {
    key: string;
    logo: string;
    title?: string;
    size?: string;
    width?: string;
    isRound?: boolean;
    offsetX?: string;
    effectTimeout?: number;
}
