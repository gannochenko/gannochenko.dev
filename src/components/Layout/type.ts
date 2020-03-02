import { ReactNode } from 'react';

export interface Props {
    children?: ReactNode;
    path: string;
    pageContext: {
        frontmatter: {
            title?: string;
            backUrl?: string;
            [k: string]: any;
        };
    };
}
