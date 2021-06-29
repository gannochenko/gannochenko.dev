import React, { FunctionComponent, useEffect, useState, useMemo } from 'react';
import { throttle } from 'throttle-debounce';
import { useTheme } from '../../style';
import { Props } from './type';

import { SkillsContainer, SkillsOffset, InnerContainer } from './style';
import { Row } from './components/Row';
import { Skill } from './components/Skill';

import { skills } from '../../skills/skills';
import { detectRange, getGrid } from './util';
import { ThemeType } from '@gannochenko/etc';

export const Skills: FunctionComponent<Props> = ({
    list,
    enableEffect = true,
}) => {
    const selected = useMemo(
        () =>
            list
                .split(',')
                .map(item => item.trim())
                .filter(item => !!item),
        [list],
    );

    const theme = useTheme() as ThemeType;
    const [range, setRange] = useState(detectRange(theme));

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const onResize = throttle(200, () => {
            const currentRange = detectRange(theme);
            if (range !== currentRange) {
                setRange(currentRange);
            }
        });
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, [theme]);

    const grid = useMemo(() => {
        return getGrid(
            selected.map(skill => skills[skill]),
            range,
        );
    }, [selected, range]);

    return (
        <SkillsContainer>
            <InnerContainer>
                <SkillsOffset>
                    {grid.map((row, i) => (
                        <Row
                            effectTimeoutBase={0}
                            odd={i % 2 > 0}
                            key={i}
                            enableEffect={enableEffect}
                        >
                            {row.map(item => (
                                <Skill key={item.key} {...item} />
                            ))}
                        </Row>
                    ))}
                </SkillsOffset>
            </InnerContainer>
        </SkillsContainer>
    );
};
