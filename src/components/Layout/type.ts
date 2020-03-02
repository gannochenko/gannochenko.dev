import { ReactNode } from 'react';

export interface Props {
    children?: ReactNode;
    path: string;
    pageContext: {
        frontmatter: {
            title?: string;
            backUrl?: string;
            keywords?: string[];
            description?: string;
            [k: string]: any;
        };
    };
}
