import React, { FC } from 'react';
import styled from 'styled-components';
import { Container } from '../../../Container';
import { backgroundCover, colorLynch, foregroundColor } from '@gannochenko/etc';

const githubLogo = require('./github.png') as string;
const poolIcon = require('./pool.svg') as string;

const ProjectLinksRoot = styled(Container)`
    margin-bottom: 5rem;
    display: flex;

    & > *:not(:last-child) {
        margin-right: 3rem;
    }
`;

export const ProjectLinksLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    ${() => foregroundColor(colorLynch, 'inherit', '300ms')}
`;

const ProjectLinksGithubLogo = styled.div<{ logo: string }>`
    ${({ logo }) => backgroundCover(logo)};
    height: 2rem;
    width: 2rem;
    margin-right: 0.5rem;
`;

type ProjectLinksPropsType = {
    source?: string;
    article?: string;
};

export const ProjectLinks: FC<ProjectLinksPropsType> = ({
    source,
    article,
}) => {
    return (
        <ProjectLinksRoot>
            {!!source && (
                <ProjectLinksLink
                    href={source}
                    target="_blank"
                    rel="noreferrer nofollower"
                >
                    <ProjectLinksGithubLogo logo={githubLogo} />
                    Source code
                </ProjectLinksLink>
            )}
            {!!article && (
                <ProjectLinksLink href={article}>
                    <ProjectLinksGithubLogo logo={poolIcon} />
                    Howto article
                </ProjectLinksLink>
            )}
        </ProjectLinksRoot>
    );
};
