import React, { FunctionComponent, useEffect, useState, useMemo } from 'react';
import { throttle } from 'throttle-debounce';
import { Props } from './type';

import { SkillsContainer, SkillsOffset, InnerContainer } from './style';
import { Row } from './components/Row';
import { Skill } from './components/Skill';

import { skills } from '../../skills/skills';
import { detectRange, getGrid } from './util';
import { Link } from 'gatsby';

export const Skills: FunctionComponent<Props> = ({ type, showLinkToRadar }) => {
    const data = skills[type] || [];
    const [range, setRange] = useState(detectRange());

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

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
            <InnerContainer>
                <SkillsOffset>
                    {grid.map((row, i) => (
                        <Row effectTimeoutBase={0} odd={i % 2 > 0} key={i}>
                            {row.map(item => (
                                <Skill key={item.key} {...item} />
                            ))}
                        </Row>
                    ))}
                </SkillsOffset>
            </InnerContainer>
            {showLinkToRadar && (
                <InnerContainer>
                    But that is not allllllllll????! View&nbsp;
                    <Link to="/techradar/">the entire list</Link>
                </InnerContainer>
            )}
        </SkillsContainer>
    );
};
