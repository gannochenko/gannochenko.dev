import React, { FunctionComponent, useRef } from 'react';

import { ProjectDetailsPageContainerRoot } from './style';
import { Props } from './type';

export const ProjectDetailsPageContainer: FunctionComponent<Props> = ({
    children,
}) => {
    const containerRef = useRef(null);

    return (
        <ProjectDetailsPageContainerRoot ref={containerRef}>
            {children}
        </ProjectDetailsPageContainerRoot>
    );
};
