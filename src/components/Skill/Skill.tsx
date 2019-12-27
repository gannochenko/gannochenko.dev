import React, { FunctionComponent } from 'react';

import { SkillContainer, Hexagon, Logo } from './style';

import { Props } from './type';

export const Skill: FunctionComponent<Props> = ({
    logo,
    title,
    size,
    isRound,
}) => {
    return (
        <SkillContainer>
            <Hexagon>
                <Logo src={logo} size={size} isRound={isRound} />
            </Hexagon>
        </SkillContainer>
    );
};
