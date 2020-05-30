import { ReactNode } from 'react';

export interface QueryProps {
    children: (data: any) => ReactNode;
}

export interface ObjectLiteral<P = any> {
    [k: string]: P;
}

export type FontSize = 'large' | 'medium' | 'standard' | 'small';

export type Nullable<P> = P | null;

export type ContentRecordImageType = {
    author?: string;
    source?: string;
    sourceText?: string;
    is_cover?: boolean;
    image: Nullable<{
        childImageSharp: ObjectLiteral;
    }>;
};

export type ContentRecordType = {
    frontmatter: {
        images: ContentRecordImageType[];
        title: string;
        date: string;
        backUrl?: string;
        keywords?: string[];
        description?: string;
    } & ObjectLiteral;
    body: string;
    id: string;
};
