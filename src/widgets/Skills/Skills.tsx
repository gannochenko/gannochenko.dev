import React, { FunctionComponent, useEffect, useState, useMemo } from 'react';
import { throttle } from 'throttle-debounce';
import { Props } from './type';

import { SkillsContainer, SkillsOffset } from './style';
import { Row } from './components/Row';
import { Skill } from './components/Skill';

import { skills } from '../../skills/skills';
import { detectRange, getGrid } from './util';

export const Skills: FunctionComponent<Props> = ({ type }) => {
    const data = skills[type] || [];
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
        return getGrid(data, range);
    }, [data, range]);

    return (
        <SkillsContainer>
            <SkillsOffset>
                {grid.map((row, i) => (
                    <Row effectTimeoutBase={0} odd={i % 2 > 0} key={i}>
                        {row.map(item => (
                            <Skill key={item.key} {...item} />
                        ))}
                    </Row>
                ))}
            </SkillsOffset>
        </SkillsContainer>
    );
};
