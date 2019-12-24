import { FontSize } from '../../type';

export interface Props {
    html: string;
    raw: string;
    fontSize: FontSize;
    width: string;
    graphics: {
        image: any;
        source?: string;
        sourceText?: string;
        author?: string;
    }[];
    effect?: string;
    effectTimeout?: number;
}
