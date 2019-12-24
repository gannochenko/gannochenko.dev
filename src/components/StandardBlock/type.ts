import { FontSize } from '../../type';

export interface Props {
    data: string;
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
