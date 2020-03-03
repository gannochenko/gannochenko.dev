import React, { FunctionComponent } from 'react';

import { SkillContainer, HexagonContainer, Logo } from './style';
import { Hexagon } from '../Hexagon';

import { Props } from './type';
import { TextFit } from './components/TextFit';

export const Skill: FunctionComponent<Props> = ({
    logo,
    size,
    width,
    isRound,
    offsetX,
    title,
    fontSize,
}) => {
    return (
        <SkillContainer>
            {(!!logo || !!title) && (
                <>
                    <HexagonContainer>
                        <Hexagon />
                    </HexagonContainer>
                    <Logo
                        src={logo}
                        size={size}
                        isRound={isRound}
                        width={width}
                        offsetX={offsetX}
                    />
                    <HexagonContainer className="skill-overlay">
                        <Hexagon filled />
                        <TextFit size={fontSize}>{title}</TextFit>
                    </HexagonContainer>
                </>
            )}
        </SkillContainer>
    );
};
