import React, { FC } from 'react';
import styled from 'styled-components';
import { Container } from '../../../Container';
import { backgroundCover, colorLynch, foregroundColor } from '@gannochenko/etc';

const githubLogo = require('./github.png') as string;
const poolIcon = require('./pool.svg') as string;
const dockerIcon = require('./docker.png') as string;
const npmIcon = require('./npm.svg') as string;
const modDbIcon = require('./moddb.png') as string;

const ProjectLinksRoot = styled(Container)`
    margin-bottom: 5rem;
`;

export const ProjectLinksLinks = styled.div`
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

const ProjectLinksLogo = styled.div<{ logo: string }>`
    ${({ logo }) => backgroundCover(logo)};
    height: 2rem;
    width: 2rem;
    margin-right: 0.5rem;
`;

const ProjectLinksLogoModdb = styled.div`
    ${backgroundCover(modDbIcon)};
    height: 0.8rem;
    width: 2rem;
    margin-right: 0.5rem;
`;

export const ProjectLinksCredit = styled.div`
    font-size: 0.7rem;
    margin-top: 1.5rem;

    color: lightgray;
    a,
    a:hover,
    a:active,
    a:visited,
    a:focus {
        color: lightgray;
    }
`;

type ProjectLinksPropsType = {
    source?: string;
    article?: string;
    dockerhub?: string;
    npm?: string;
    moddb?: string;
};

export const ProjectLinks: FC<ProjectLinksPropsType> = ({
    source,
    article,
    dockerhub,
    npm,
    moddb,
}) => {
    return (
        <ProjectLinksRoot>
            <ProjectLinksLinks>
                {!!source && (
                    <ProjectLinksLink
                        href={source}
                        target="_blank"
                        rel="noreferrer nofollower"
                    >
                        <ProjectLinksLogo logo={githubLogo} />
                        Source code
                    </ProjectLinksLink>
                )}
                {!!article && (
                    <ProjectLinksLink href={article}>
                        <ProjectLinksLogo logo={poolIcon} />
                        Howto article
                    </ProjectLinksLink>
                )}
                {!!dockerhub && (
                    <ProjectLinksLink
                        href={dockerhub}
                        target="_blank"
                        rel="noreferrer nofollower"
                    >
                        <ProjectLinksLogo logo={dockerIcon} />
                        Docker Image
                    </ProjectLinksLink>
                )}
                {!!npm && (
                    <ProjectLinksLink
                        href={npm}
                        target="_blank"
                        rel="noreferrer nofollower"
                    >
                        <ProjectLinksLogo logo={npmIcon} />
                        NPM
                    </ProjectLinksLink>
                )}
                {!!moddb && (
                    <ProjectLinksLink
                        href={moddb}
                        target="_blank"
                        rel="noreferrer nofollower"
                    >
                        <ProjectLinksLogoModdb />
                        Moddb
                    </ProjectLinksLink>
                )}
            </ProjectLinksLinks>
            {!!npm && (
                <ProjectLinksCredit>
                    <a
                        href="https://iconscout.com/icons/npm"
                        target="_blank"
                        rel="noreferrer nofollower"
                    >
                        Npm Icon
                    </a>{' '}
                    by{' '}
                    <a
                        href="https://iconscout.com/contributors/fengquanli"
                        target="_blank"
                        rel="noreferrer nofollower"
                    >
                        Fengquan Li
                    </a>{' '}
                    on{' '}
                    <a
                        href="https://iconscout.com"
                        target="_blank"
                        rel="noreferrer nofollower"
                    >
                        Iconscout
                    </a>
                </ProjectLinksCredit>
            )}
        </ProjectLinksRoot>
    );
};
