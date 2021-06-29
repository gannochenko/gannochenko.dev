export interface Props {
    list: string;
    enableEffect?: boolean;
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
