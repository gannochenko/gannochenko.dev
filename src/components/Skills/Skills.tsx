import React, { FunctionComponent, useMemo } from 'react';
import { Skill } from '../Skill';

import { logo } from './assets';

import { SkillsContainer, SkillsOffset, Row, Cell } from './style';

const tmp: number[] = [];
for (let i = 1; i < 20; i++) {
    tmp.push(i);
}

const oddLine = 4;
const evenLine = 3;

export const Skills: FunctionComponent<Props> = () => {
    let line = 1;
    let nextLast = 4;

    let lines = Math.ceil(tmp.length / (oddLine + evenLine)) * 2;
    console.log(lines);

    const grid = useMemo(() => {});

    return (
        <SkillsContainer>
            <SkillsOffset>
                {/*{tmp.map(itemNumber => {*/}
                {/*    let last = false;*/}
                {/*    if (itemNumber === nextLast) {*/}
                {/*        last = true;*/}
                {/*        line += 1;*/}
                {/*        nextLast = nextLast + (line === 1 || (line % 2) ? oddLine : evenLine);*/}
                {/*    }*/}
                {/*    return (*/}
                {/*        <Skill key={itemNumber} last={last} firstShift={false}>*/}
                {/*            {itemNumber}*/}
                {/*        </Skill>*/}
                {/*    );*/}
                {/*})}*/}

                <Row>
                    <Cell last={false} firstShift={false}>
                        <Skill logo={logo.apollo} title="Apollo GraphQL" />
                    </Cell>
                    <Cell last={false} firstShift={false}>
                        <Skill logo={logo.aws} title="AWS" size="4.5rem" />
                    </Cell>
                    <Cell last={false} firstShift={false}>
                        <Skill
                            logo={logo.bitrix}
                            title="Bitrix"
                            size="3.5rem"
                        />
                    </Cell>
                    <Cell last={true} firstShift={false}>
                        <Skill logo={logo.css} title="CSS" size="4.5rem" />
                    </Cell>
                </Row>

                <Row>
                    <Cell last={false} firstShift={true}>
                        <Skill
                            logo={logo.docker}
                            title="Docker"
                            size="4.5rem"
                        />
                    </Cell>
                    <Cell last={false} firstShift={false}>
                        <Skill
                            logo={logo.expressjs}
                            title="ExpressJS"
                            size="4rem"
                        />
                    </Cell>
                    <Cell last={false} firstShift={false}>
                        <Skill
                            logo={logo.gatsbyjs}
                            title="GatsbyJS"
                            size="3.5rem"
                        />
                    </Cell>
                </Row>

                <Row>
                    <Cell last={false} firstShift={false}>
                        <Skill logo={logo.git} title="GIT" size="4rem" />
                    </Cell>
                    <Cell last={false} firstShift={false}>
                        <Skill logo={logo.html} title="HTML" size="4.5rem" />
                    </Cell>
                    <Cell last={false} firstShift={false}>
                        <Skill
                            logo={logo.js}
                            title="JavaScript"
                            size="3.5rem"
                            isRound
                        />
                    </Cell>
                    <Cell last={true} firstShift={false}>
                        <Skill
                            logo={logo.less}
                            title="LESS"
                            size="2.0rem"
                            width="4rem"
                        />
                    </Cell>
                </Row>

                <Row>
                    <Cell last={false} firstShift={true}>
                        <Skill
                            logo={logo.linux}
                            title="Linux"
                            size="4rem"
                            offsetX="0.7rem"
                        />
                    </Cell>
                    <Cell last={false} firstShift={false}>
                        <Skill
                            logo={logo.meteorjs}
                            title="MeteorJS"
                            size="4rem"
                        />
                    </Cell>
                    <Cell last={false} firstShift={false}>
                        <Skill
                            logo={logo.mongodb}
                            title="MongoDB"
                            size="4.5rem"
                        />
                    </Cell>
                </Row>

                <Row>
                    <Cell last={false} firstShift={false}>
                        <Skill
                            logo={logo.mysql}
                            title="MYSQL"
                            size="4.5rem"
                            isRound
                        />
                    </Cell>
                    <Cell last={false} firstShift={false}>
                        <Skill
                            logo={logo.nodejs}
                            title="NodeJS"
                            size="2.5rem"
                            width="4rem"
                        />
                    </Cell>
                    <Cell last={false} firstShift={false}>
                        <Skill
                            logo={logo.php}
                            title="PHP"
                            size="3.5rem"
                            isRound
                        />
                    </Cell>
                    <Cell last={true} firstShift={false}>
                        <Skill
                            logo={logo.postgressql}
                            title="PostgresSQL"
                            size="4.0rem"
                        />
                    </Cell>
                </Row>

                <Row>
                    <Cell last={false} firstShift={true}>
                        <Skill
                            logo={logo.reactjs}
                            title="ReactJS"
                            size="4rem"
                        />
                    </Cell>
                    <Cell last={false} firstShift={false}>
                        <Skill logo={logo.redis} title="Redis" size="4rem" />
                    </Cell>
                    <Cell last={false} firstShift={false}>
                        <Skill logo={logo.redux} title="Redux" size="4rem" />
                    </Cell>
                </Row>

                <Row>
                    <Cell last={false} firstShift={false}>
                        <Skill
                            logo={logo.saga}
                            title="Saga"
                            size="2.2rem"
                            width="3.6rem"
                        />
                    </Cell>
                    <Cell last={false} firstShift={false}>
                        <Skill
                            logo={logo.sass}
                            title="SASS"
                            size="2.5rem"
                            width="4rem"
                        />
                    </Cell>
                    <Cell last={false} firstShift={false}>
                        <Skill
                            logo={logo.serverless}
                            title="Serverless"
                            size="3.5rem"
                            isRound
                        />
                    </Cell>
                    <Cell last={true} firstShift={false}>
                        <Skill
                            logo={logo.styledcomponents}
                            title="Styled Components"
                            size="4.0rem"
                        />
                    </Cell>
                </Row>

                <Row>
                    <Cell last={false} firstShift={true}>
                        <Skill
                            logo={logo.terraform}
                            title="Terraform"
                            size="1.15rem"
                            width="4.8rem"
                        />
                    </Cell>
                </Row>
            </SkillsOffset>
        </SkillsContainer>
    );
};

import { Props } from './type';
