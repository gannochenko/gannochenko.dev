import React, {
    FunctionComponent,
    useCallback,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';
import animateScrollTo from 'animated-scroll-to';

import { CupRoot, CupImage, CupRefill, CupInner } from './style';
import { CupPropsType } from './type';
import { Container } from '../Container';

export const Cup: FunctionComponent<CupPropsType> = ({
    children,
    frameNumber,
    verticalConstraint,
}) => {
    const horizontalConstraint = useRef<HTMLDivElement>();
    const cup = useRef<HTMLDivElement>(null);

    const [cupVisible, setCupVisible] = useState(false);

    const scrollToTop = useCallback(() => {
        animateScrollTo(0, {
            speed: 100,
        });
    }, []);

    useLayoutEffect(() => {
        if (!cup.current) {
            return;
        }

        const handler = () => {
            const cupNode = cup.current!;
            const verticalConstraintNode = verticalConstraint.current!;

            // const windowScrollTop = window.pageYOffset;
            // const windowHeight = window.innerHeight;

            const cupRect = cupNode.getBoundingClientRect();
            const verticalConstraintRect = verticalConstraintNode.getBoundingClientRect();

            if (verticalConstraintRect.y < cupRect.y) {
                setCupVisible(true);
            } else {
                setCupVisible(false);
            }
        };

        window.addEventListener('scroll', handler);
        window.addEventListener('resize', handler);
        setTimeout(handler, 0);

        return () => {
            window.removeEventListener('scroll', handler);
            window.removeEventListener('resize', handler);
        };
    }, [cup.current, setCupVisible]);

    return (
        <Container ref={horizontalConstraint}>
            <CupRoot ref={cup}>
                <CupInner visible={cupVisible} onClick={scrollToTop}>
                    <CupImage frameNumber={frameNumber}>{children}</CupImage>
                    <CupRefill>Refill!</CupRefill>
                </CupInner>
            </CupRoot>
        </Container>
    );
};

Cup.defaultProps = {
    frameNumber: 1,
};
