import { ReactNode } from 'react';

export interface Props {
    children?: ReactNode;
    className?: string;
    main?: boolean;
    sub?: boolean;
    subSub?: boolean;
    showAnchor?: boolean;
}
