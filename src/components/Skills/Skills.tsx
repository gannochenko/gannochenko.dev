import React, { FunctionComponent, useMemo } from 'react';
import { Skill } from '../Skill';

import { apollo, aws } from './assets';

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
                        <Skill logo={apollo} title="Apollo GraphQL" />
                    </Cell>
                    <Cell last={false} firstShift={false}>
                        <Skill logo={aws} title="AWS" size="70%" />
                    </Cell>
                    <Cell last={false} firstShift={false}>
                        <Skill logo="" title="" />
                    </Cell>
                    <Cell last={true} firstShift={false}>
                        <Skill logo="" title="" />
                    </Cell>
                </Row>

                <Row>
                    <Cell last={false} firstShift={true}>
                        <Skill logo="" title="" />
                    </Cell>
                    <Cell last={false} firstShift={false}>
                        <Skill logo="" title="" />
                    </Cell>
                    <Cell last={false} firstShift={false}>
                        <Skill logo="" title="" />
                    </Cell>
                </Row>

                <Row>
                    <Cell last={false} firstShift={false}>
                        <Skill logo="" title="" />
                    </Cell>
                    <Cell last={false} firstShift={false}>
                        <Skill logo="" title="" />
                    </Cell>
                    <Cell last={false} firstShift={false}>
                        <Skill logo="" title="" />
                    </Cell>
                    <Cell last={true} firstShift={false}>
                        <Skill logo="" title="" />
                    </Cell>
                </Row>

                <Row>
                    <Cell last={false} firstShift={true}>
                        <Skill logo="" title="" />
                    </Cell>
                    <Cell last={false} firstShift={false}>
                        <Skill logo="" title="" />
                    </Cell>
                    <Cell last={false} firstShift={false}>
                        <Skill logo="" title="" />
                    </Cell>
                </Row>
            </SkillsOffset>
        </SkillsContainer>
    );
};

import { Props } from './type';
