import { ReactNode } from 'react';

export interface Props {
    children: ReactNode[];
    odd?: boolean;
    effectTimeoutBase: number;
    enableEffect?: boolean;
}
