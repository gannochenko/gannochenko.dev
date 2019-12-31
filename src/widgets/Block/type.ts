import { FontSize } from '../../type';
import { ContainerType } from '../../components/Container/type';
import { Props as WidgetProps } from '../type';

export interface Props extends WidgetProps {
    fontSize: FontSize;
    containerType: ContainerType;
    effect?: string;
    effectTimeout?: number;
    contentAlign: 'center' | 'left' | 'right';
}
