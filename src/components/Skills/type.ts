export interface Props {
    type: 'primary' | 'frontend' | 'backend' | 'devops' | 'familiar' | 'util';
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
