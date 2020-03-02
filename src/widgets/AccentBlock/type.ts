import { FontSize } from '../../type';
import { Props as WidgetProps } from '../type';
import { ReactNode } from 'react';

export interface Props {
    children?: ReactNode;
    graphics?: {
        image: any;
        source?: string;
        sourceText?: string;
        author?: string;
    }[];
}

export interface Props extends WidgetProps {
    fontSize: FontSize;
    effect?: string;
    effectTimeout?: number;
}
