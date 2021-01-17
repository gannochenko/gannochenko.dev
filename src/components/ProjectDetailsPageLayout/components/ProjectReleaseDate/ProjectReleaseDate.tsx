import React, { useMemo } from 'react';
import styled from 'styled-components';
import { ObjectLiteral } from '../../../../type';
import { Container } from '../../../Container';
import { Typography } from '../../../Typography';

export const ProjectReleaseDateRoot = styled(Container)`
    margin-top: -1rem;
`;

export const ProjectReleaseDate = ({ date, released }: ObjectLiteral) => {
    const year = useMemo(() => new Date(date).getFullYear(), [date]);

    return (
        <ProjectReleaseDateRoot>
            <Typography label>
                {released ? 'First' : 'Was supposed to be'} released in {year}
            </Typography>
        </ProjectReleaseDateRoot>
    );
};

ProjectReleaseDate.defaultProps = {
    released: true,
};
