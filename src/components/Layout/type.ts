import { ReactNode } from 'react';

export interface Props {
    children?: ReactNode;
    shortHeader: boolean;
    title?: string;
    backURL?: string;
}
