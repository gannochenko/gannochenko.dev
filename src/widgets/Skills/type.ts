import { Props as WidgetProps } from '../type';

export interface Props extends WidgetProps {
    type: 'primary' | 'frontend' | 'backend' | 'devops' | 'familiar' | 'util';
    showLinkToRadar?: boolean;
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
