import { FontSize } from '../../type';

export interface Props {
    html: string;
    raw: string;
    fontSize: FontSize;
    effect?: string;
    effectTimeout?: number;
}
