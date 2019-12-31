import React, { FunctionComponent } from 'react';

import { SkillContainer, Hexagon, Logo } from './style';

import { Props } from './type';

export const Skill: FunctionComponent<Props> = ({
    logo,
    size,
    width,
    isRound,
    offsetX,
}) => {
    return (
        <SkillContainer>
            <Hexagon>
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
