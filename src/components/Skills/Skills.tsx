import React, { FunctionComponent, useEffect, useState, useMemo } from 'react';
import { throttle } from 'throttle-debounce';
import { Skill } from '../Skill';
import { theme } from '../../style';

import { logo } from './assets';

import { SkillsContainer, SkillsOffset } from './style';
import { Row } from './components/Row';

const detectRange = () => {
    const windowWidth = window.innerWidth;
    const {
        grid: {
            breakpoints: { xs, sm, md, lg },
        },
    } = theme;

    if (windowWidth < xs[1]!) {
        return 'xs';
    }
    if (windowWidth > sm[0] && windowWidth < sm[1]) {
        return 'sm';
    }
    if (windowWidth > md[0] && windowWidth < md[1]) {
        return 'md';
    }
    if (windowWidth > lg[0]!) {
        return 'lg';
    }

    return 'xs';
};

const skills = [{}];

export const Skills: FunctionComponent<Props> = () => {
    const [range, setRange] = useState(detectRange());

    useEffect(() => {
        const onResize = throttle(200, () => {
            const currentRange = detectRange();
            if (range !== currentRange) {
                setRange(currentRange);
            }
        });
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        };
    });

    const grid = useMemo(() => {
        return [];
    }, [range]);
    console.log(grid);

    return (
        <SkillsContainer>
            <SkillsOffset>
                <Row effectTimeoutBase={0}>
                    {[
                        <Skill
                            key="apollo"
                            logo={logo.apollo}
                            title="Apollo GraphQL"
                        />,
                        <Skill
                            key="aws"
                            logo={logo.aws}
                            title="AWS"
                            size="4.5rem"
                        />,
                        <Skill
                            key="bitrix"
                            logo={logo.bitrix}
                            title="Bitrix"
                            size="3.5rem"
                        />,
                        <Skill
                            key="css"
                            logo={logo.css}
                            title="CSS"
                            size="4.5rem"
                        />,
                    ]}
                </Row>

                <Row odd effectTimeoutBase={0}>
                    {[
                        <Skill
                            key="docker"
                            logo={logo.docker}
                            title="Docker"
                            size="4.5rem"
                        />,
                        <Skill
                            key="expressjs"
                            logo={logo.expressjs}
                            title="ExpressJS"
                            size="4rem"
                        />,
                        <Skill
                            key="gatsbyjs"
                            logo={logo.gatsbyjs}
                            title="GatsbyJS"
                            size="3.5rem"
                        />,
                    ]}
                </Row>

                <Row effectTimeoutBase={0}>
                    {[
                        <Skill
                            key="git"
                            logo={logo.git}
                            title="GIT"
                            size="4rem"
                        />,
                        <Skill
                            key="html"
                            logo={logo.html}
                            title="HTML"
                            size="4.5rem"
                        />,
                        <Skill
                            key="javascript"
                            logo={logo.js}
                            title="JavaScript"
                            size="3.5rem"
                            isRound
                        />,
                        <Skill
                            key="less"
                            logo={logo.less}
                            title="LESS"
                            size="2.0rem"
                            width="4rem"
                        />,
                    ]}
                </Row>

                <Row effectTimeoutBase={0} odd>
                    {[
                        <Skill
                            key="linux"
                            logo={logo.linux}
                            title="Linux"
                            size="4rem"
                            offsetX="0.7rem"
                        />,
                        <Skill
                            key="meteorjs"
                            logo={logo.meteorjs}
                            title="MeteorJS"
                            size="4rem"
                        />,
                        <Skill
                            key="mongodb"
                            logo={logo.mongodb}
                            title="MongoDB"
                            size="4.5rem"
                        />,
                    ]}
                </Row>

                <Row effectTimeoutBase={0}>
                    {[
                        <Skill
                            key="mysql"
                            logo={logo.mysql}
                            title="MYSQL"
                            size="4.5rem"
                            isRound
                        />,
                        <Skill
                            key="nodejs"
                            logo={logo.nodejs}
                            title="NodeJS"
                            size="2.5rem"
                            width="4rem"
                        />,
                        <Skill
                            key="php"
                            logo={logo.php}
                            title="PHP"
                            size="3.5rem"
                            isRound
                        />,
                        <Skill
                            key="postgressql"
                            logo={logo.postgressql}
                            title="PostgresSQL"
                            size="4.0rem"
                        />,
                    ]}
                </Row>

                <Row effectTimeoutBase={0} odd>
                    {[
                        <Skill
                            key="reactjs"
                            logo={logo.reactjs}
                            title="ReactJS"
                            size="4rem"
                        />,
                        <Skill
                            key="redis"
                            logo={logo.redis}
                            title="Redis"
                            size="4rem"
                        />,
                        <Skill
                            key="redux"
                            logo={logo.redux}
                            title="Redux"
                            size="4rem"
                        />,
                    ]}
                </Row>

                <Row effectTimeoutBase={0}>
                    {[
                        <Skill
                            key="saga"
                            logo={logo.saga}
                            title="Saga"
                            size="2.2rem"
                            width="3.6rem"
                        />,
                        <Skill
                            key="sass"
                            logo={logo.sass}
                            title="SASS"
                            size="2.5rem"
                            width="4rem"
                        />,
                        <Skill
                            key="serverless"
                            logo={logo.serverless}
                            title="Serverless"
                            size="3.5rem"
                            isRound
                        />,
                        <Skill
                            key="styledcomponents"
                            logo={logo.styledcomponents}
                            title="Styled Components"
                            size="4.0rem"
                        />,
                    ]}
                </Row>

                <Row effectTimeoutBase={0} odd>
                    {[
                        <Skill
                            key="terraform"
                            logo={logo.terraform}
                            title="Terraform"
                            size="1.15rem"
                            width="4.8rem"
                        />,
                        <Skill
                            key="typescript"
                            logo={logo.typescript}
                            title="Typescript"
                            size="3.5rem"
                            // width="4.8rem"
                            isRound
                        />,
                        <Skill
                            key="kubernetes"
                            logo={logo.kubernetes}
                            title="Kubernetes"
                            size="3.5rem"
                            // width="4.8rem"
                        />,
                    ]}
                </Row>
            </SkillsOffset>
        </SkillsContainer>
    );
};

import { Props } from './type';
