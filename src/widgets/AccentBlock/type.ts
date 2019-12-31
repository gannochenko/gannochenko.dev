import { FontSize } from '../../type';
import { Props as WidgetProps } from '../type';

export interface Props extends WidgetProps {
    fontSize: FontSize;
    effect?: string;
    effectTimeout?: number;
}
