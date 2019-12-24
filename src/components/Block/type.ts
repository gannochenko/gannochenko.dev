import { FontSize } from '../../type';
import { ContainerType } from '../Container/type';

export interface Props {
    html: string;
    raw: string;
    fontSize: FontSize;
    containerType: ContainerType;
    graphics: {
        image: any;
        source?: string;
        sourceText?: string;
        author?: string;
    }[];
    effect?: string;
    effectTimeout?: number;
}
