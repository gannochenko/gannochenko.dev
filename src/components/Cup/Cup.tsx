import React, { FunctionComponent, useEffect, useRef } from 'react';

import { CupRoot, CupImage, CupRefill } from './style';
import { CupPropsType } from './type';
import { Container } from '../Container';

export const Cup: FunctionComponent<CupPropsType> = ({
    children,
    frameNumber,
    verticalConstraint,
}) => {
    const horizontalConstraint = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => {
            console.log('V');
            console.log(verticalConstraint.current);

            console.log('H');
            console.log(horizontalConstraint.current);
        }, 0);
    });

    return (
        <>
            <Container ref={horizontalConstraint}></Container>
            <CupRoot>
                <CupImage frameNumber={frameNumber}>{children}</CupImage>
                <CupRefill>Refill!</CupRefill>
            </CupRoot>
        </>
    );
};

Cup.defaultProps = {
    frameNumber: 1,
};
