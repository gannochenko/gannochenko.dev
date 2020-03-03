import { ReactNode } from 'react';

export interface Props {
    name: string;
    timeout?: number;
    children?: ReactNode;
}
