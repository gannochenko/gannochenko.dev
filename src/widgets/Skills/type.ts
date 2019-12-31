import { Props as WidgetProps } from '../type';

export interface Props extends WidgetProps {
    type: 'main' | 'rest';
}

export interface SkillItem {
    key: string;
    logo: string;
    title?: string;
    size?: string;
    width?: string;
    isRound?: boolean;
    offsetX?: string;
    effectTimeout?: number;
}
