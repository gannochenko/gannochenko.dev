import { HTMLProps } from 'react';

export type Props = {
    type: string;
    src?: string;
} & HTMLProps<HTMLElement>;
