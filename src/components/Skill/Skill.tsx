import React, { FunctionComponent, useMemo } from 'react';

import { SkillContainer, Hexagon, Logo } from './style';

import { Props } from './type';

export const Skill: FunctionComponent<Props> = ({
    logo,
    title,
    size,
    width,
    isRound,
    offsetX,
    effectTimeout,
}) => {
    const timeout = useMemo(
        () => (effectTimeout ? effectTimeout : Math.ceil(1000 * Math.random())),
        [effectTimeout],
    );

    return (
        <SkillContainer>
            <Hexagon effectTimeout={timeout} effect="fade-slide-bottom">
                <Logo
                    src={logo}
                    size={size}
                    isRound={isRound}
                    width={width}
                    offsetX={offsetX}
                />
            </Hexagon>
        </SkillContainer>
    );
};
