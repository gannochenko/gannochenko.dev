import { ObjectLiteral } from '../../type';

export interface Props {
    data: {
        mdx: {
            frontmatter: ObjectLiteral;
            body: string;
            id: string;
        };
    };
    path: string;
}
