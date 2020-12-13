import { ButtonHTMLAttributes, MouseEvent } from 'react';

export type ButtonPropsType = {
    onSubmit: (event: MouseEvent<HTMLElement>) => void;
    // custom props here
} & ButtonHTMLAttributes<HTMLButtonElement>;
