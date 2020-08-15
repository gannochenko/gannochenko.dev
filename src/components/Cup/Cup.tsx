import React, {
    FunctionComponent,
    useCallback,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';
import animateScrollTo from 'animated-scroll-to';

import { CupRoot, CupImage, CupRefill, CupInner, CupPreload } from './style';
import { CupPropsType } from './type';
import { Container } from '../Container';

export const Cup: FunctionComponent<CupPropsType> = ({
    verticalConstraint,
}) => {
    const horizontalConstraint = useRef<HTMLDivElement>();
    const cup = useRef<HTMLDivElement>(null);

    const [cupVisible, setCupVisible] = useState(false);
    const [frameNumber, setFrameNumber] = useState(0);

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

            const windowScrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;

            // const cupRect = cupNode.getBoundingClientRect();
            const verticalConstraintRect = verticalConstraintNode.getBoundingClientRect();

            // if (verticalConstraintRect.y < cupRect.y) {
            //     setCupVisible(true);
            // } else {
            //     setCupVisible(false);
            // }

            const topEdge = windowScrollTop + verticalConstraintRect.y;
            const bottomEdge =
                windowScrollTop +
                verticalConstraintRect.y +
                verticalConstraintRect.height;
            const windowBottomEdge = windowScrollTop + windowHeight;

            const extra = 80;

            if (windowBottomEdge > bottomEdge + extra) {
                const diff = windowBottomEdge - (bottomEdge + extra);
                cupNode.style.bottom = `${32 + diff}px`;
            } else {
                cupNode.style.bottom = '32px';
            }

            const position = windowBottomEdge - topEdge;
            const endPosition = bottomEdge - topEdge;

            const percent = Math.floor((position / endPosition) * 100);

            const step = Math.floor(percent / 20);
            setFrameNumber(step);
            setCupVisible(true);
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
            <CupRoot ref={cup} visible={cupVisible}>
                <CupInner visible={true} onClick={scrollToTop}>
                    <CupImage frameNumber={frameNumber} />
                    <CupRefill visible={frameNumber >= 4}>Refill!</CupRefill>
                </CupInner>
            </CupRoot>
            <CupPreload>
                <CupImage frameNumber={0} />
                <CupImage frameNumber={1} />
                <CupImage frameNumber={2} />
                <CupImage frameNumber={3} />
                <CupImage frameNumber={4} />
            </CupPreload>
        </Container>
    );
};

Cup.defaultProps = {};
