import { ReactNode } from 'react';

export interface Props {
    html: string;
    raw: string;
    key: string;
    children?: ReactNode;
    graphics?: {
        image: any;
        source?: string;
        sourceText?: string;
        author?: string;
    }[];
}
