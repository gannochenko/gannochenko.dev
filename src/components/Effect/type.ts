import { ReactNode } from 'react';
import { StandardEffects } from '../../lib/effects';

export interface Props {
    name: StandardEffects;
    timeout?: number;
    durationA?: number;
    durationB?: number;
    easeA?: string;
    easeB?: string;
    parameterA?: string;
    parameterB?: string;
    children?: ReactNode;
}
