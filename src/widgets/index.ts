import { Block } from './Block';
import { AccentBlock } from './AccentBlock';
import { Skills } from './Skills';
import { ComponentType } from 'react';
import { ObjectLiteral } from '../type';

import { Props } from './type';

// @ts-ignore todo: fix this
export const widgets = {
    Block,
    AccentBlock,
    Skills,
} as ObjectLiteral<ComponentType<Props>>;
