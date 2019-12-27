import React, { FunctionComponent } from 'react';
import { Skill } from '../Skill';

import { logo } from './assets';

import { SkillsContainer, SkillsOffset } from './style';
import { Row as NewRow } from './components/Row';

export const Skills: FunctionComponent<Props> = () => {
    return (
        <SkillsContainer>
            <SkillsOffset>
                <NewRow effectTimeoutBase={0}>
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
                </NewRow>

                {/*<Row>*/}
                {/*    <Cell last={false} firstShift={false}>*/}
                {/*        <Skill logo={logo.apollo} title="Apollo GraphQL" effectTimeout={timeouts[0]} />*/}
                {/*    </Cell>*/}
                {/*    <Cell last={false} firstShift={false}>*/}
                {/*        <Skill logo={logo.aws} title="AWS" size="4.5rem" effectTimeout={timeouts[1]} />*/}
                {/*    </Cell>*/}
                {/*    <Cell last={false} firstShift={false}>*/}
                {/*        <Skill*/}
                {/*            logo={logo.bitrix}*/}
                {/*            title="Bitrix"*/}
                {/*            size="3.5rem"*/}
                {/*            effectTimeout={timeouts[2]}*/}
                {/*        />*/}
                {/*    </Cell>*/}
                {/*    <Cell last={true} firstShift={false}>*/}
                {/*        <Skill logo={logo.css} title="CSS" size="4.5rem"  effectTimeout={timeouts[3]} />*/}
                {/*    </Cell>*/}
                {/*</Row>*/}

                <NewRow odd effectTimeoutBase={0}>
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
                </NewRow>

                {/*<Row>*/}
                {/*    <Cell last={false} firstShift={true}>*/}
                {/*        <Skill*/}
                {/*            logo={logo.docker}*/}
                {/*            title="Docker"*/}
                {/*            size="4.5rem"*/}
                {/*        />*/}
                {/*    </Cell>*/}
                {/*    <Cell last={false} firstShift={false}>*/}
                {/*        <Skill*/}
                {/*            logo={logo.expressjs}*/}
                {/*            title="ExpressJS"*/}
                {/*            size="4rem"*/}
                {/*        />*/}
                {/*    </Cell>*/}
                {/*    <Cell last={false} firstShift={false}>*/}
                {/*        <Skill*/}
                {/*            logo={logo.gatsbyjs}*/}
                {/*            title="GatsbyJS"*/}
                {/*            size="3.5rem"*/}
                {/*        />*/}
                {/*    </Cell>*/}
                {/*</Row>*/}

                <NewRow effectTimeoutBase={0}>
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
                </NewRow>

                {/*<Row>*/}
                {/*    <Cell last={false} firstShift={false}>*/}
                {/*        <Skill logo={logo.git} title="GIT" size="4rem" />*/}
                {/*    </Cell>*/}
                {/*    <Cell last={false} firstShift={false}>*/}
                {/*        <Skill logo={logo.html} title="HTML" size="4.5rem" />*/}
                {/*    </Cell>*/}
                {/*    <Cell last={false} firstShift={false}>*/}
                {/*        <Skill*/}
                {/*            logo={logo.js}*/}
                {/*            title="JavaScript"*/}
                {/*            size="3.5rem"*/}
                {/*            isRound*/}
                {/*        />*/}
                {/*    </Cell>*/}
                {/*    <Cell last={true} firstShift={false}>*/}
                {/*        <Skill*/}
                {/*            logo={logo.less}*/}
                {/*            title="LESS"*/}
                {/*            size="2.0rem"*/}
                {/*            width="4rem"*/}
                {/*        />*/}
                {/*    </Cell>*/}
                {/*</Row>*/}

                <NewRow effectTimeoutBase={0} odd>
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
                </NewRow>

                {/*<Row>*/}
                {/*    <Cell last={false} firstShift={true}>*/}
                {/*        <Skill*/}
                {/*            logo={logo.linux}*/}
                {/*            title="Linux"*/}
                {/*            size="4rem"*/}
                {/*            offsetX="0.7rem"*/}
                {/*        />*/}
                {/*    </Cell>*/}
                {/*    <Cell last={false} firstShift={false}>*/}
                {/*        <Skill*/}
                {/*            logo={logo.meteorjs}*/}
                {/*            title="MeteorJS"*/}
                {/*            size="4rem"*/}
                {/*        />*/}
                {/*    </Cell>*/}
                {/*    <Cell last={false} firstShift={false}>*/}
                {/*        <Skill*/}
                {/*            logo={logo.mongodb}*/}
                {/*            title="MongoDB"*/}
                {/*            size="4.5rem"*/}
                {/*        />*/}
                {/*    </Cell>*/}
                {/*</Row>*/}

                <NewRow effectTimeoutBase={0}>
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
                </NewRow>

                {/*<Row>*/}
                {/*    <Cell last={false} firstShift={false}>*/}
                {/*        <Skill*/}
                {/*            logo={logo.mysql}*/}
                {/*            title="MYSQL"*/}
                {/*            size="4.5rem"*/}
                {/*            isRound*/}
                {/*        />*/}
                {/*    </Cell>*/}
                {/*    <Cell last={false} firstShift={false}>*/}
                {/*        <Skill*/}
                {/*            logo={logo.nodejs}*/}
                {/*            title="NodeJS"*/}
                {/*            size="2.5rem"*/}
                {/*            width="4rem"*/}
                {/*        />*/}
                {/*    </Cell>*/}
                {/*    <Cell last={false} firstShift={false}>*/}
                {/*        <Skill*/}
                {/*            logo={logo.php}*/}
                {/*            title="PHP"*/}
                {/*            size="3.5rem"*/}
                {/*            isRound*/}
                {/*        />*/}
                {/*    </Cell>*/}
                {/*    <Cell last={true} firstShift={false}>*/}
                {/*        <Skill*/}
                {/*            logo={logo.postgressql}*/}
                {/*            title="PostgresSQL"*/}
                {/*            size="4.0rem"*/}
                {/*        />*/}
                {/*    </Cell>*/}
                {/*</Row>*/}

                <NewRow effectTimeoutBase={0} odd>
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
                </NewRow>

                {/*<Row>*/}
                {/*    <Cell last={false} firstShift={true}>*/}
                {/*        <Skill*/}
                {/*            logo={logo.reactjs}*/}
                {/*            title="ReactJS"*/}
                {/*            size="4rem"*/}
                {/*        />*/}
                {/*    </Cell>*/}
                {/*    <Cell last={false} firstShift={false}>*/}
                {/*        <Skill logo={logo.redis} title="Redis" size="4rem" />*/}
                {/*    </Cell>*/}
                {/*    <Cell last={false} firstShift={false}>*/}
                {/*        <Skill logo={logo.redux} title="Redux" size="4rem" />*/}
                {/*    </Cell>*/}
                {/*</Row>*/}

                <NewRow effectTimeoutBase={0}>
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
                </NewRow>

                {/*<Row>*/}
                {/*    <Cell last={false} firstShift={false}>*/}
                {/*        <Skill*/}
                {/*            logo={logo.saga}*/}
                {/*            title="Saga"*/}
                {/*            size="2.2rem"*/}
                {/*            width="3.6rem"*/}
                {/*        />*/}
                {/*    </Cell>*/}
                {/*    <Cell last={false} firstShift={false}>*/}
                {/*        <Skill*/}
                {/*            logo={logo.sass}*/}
                {/*            title="SASS"*/}
                {/*            size="2.5rem"*/}
                {/*            width="4rem"*/}
                {/*        />*/}
                {/*    </Cell>*/}
                {/*    <Cell last={false} firstShift={false}>*/}
                {/*        <Skill*/}
                {/*            logo={logo.serverless}*/}
                {/*            title="Serverless"*/}
                {/*            size="3.5rem"*/}
                {/*            isRound*/}
                {/*        />*/}
                {/*    </Cell>*/}
                {/*    <Cell last={true} firstShift={false}>*/}
                {/*        <Skill*/}
                {/*            logo={logo.styledcomponents}*/}
                {/*            title="Styled Components"*/}
                {/*            size="4.0rem"*/}
                {/*        />*/}
                {/*    </Cell>*/}
                {/*</Row>*/}

                <NewRow effectTimeoutBase={0} odd>
                    {[
                        <Skill
                            key="terraform"
                            logo={logo.terraform}
                            title="Terraform"
                            size="1.15rem"
                            width="4.8rem"
                        />,
                    ]}
                </NewRow>

                {/*<Row>*/}
                {/*    <Cell last={false} firstShift={true}>*/}
                {/*        <Skill*/}
                {/*            logo={logo.terraform}*/}
                {/*            title="Terraform"*/}
                {/*            size="1.15rem"*/}
                {/*            width="4.8rem"*/}
                {/*        />*/}
                {/*    </Cell>*/}
                {/*</Row>*/}
            </SkillsOffset>
        </SkillsContainer>
    );
};

import { Props } from './type';
