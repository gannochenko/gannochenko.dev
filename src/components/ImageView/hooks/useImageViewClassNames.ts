import { useMemo } from 'react';
import { makeClassName } from '../../../util/makeClassName';

export const useImageViewClassNames = (
    componentName: string,
    className?: string,
) =>
    useMemo(
        () => ({
            root: `${className || ''} ${makeClassName(componentName)}`.trim(),
            relative: makeClassName(componentName, 'Relative'),
        }),
        [componentName, className],
    );
