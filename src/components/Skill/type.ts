import { ReactNode } from 'react';

export interface Props {
    children?: ReactNode;
    logo: string;
    title?: string;
    size?: string;
    isRound?: boolean;
}
