import React, { FunctionComponent, useCallback, useState } from 'react';

import {
    CookiePopupContainer,
    Picture,
    Text,
    AgreeButton,
    Copyright,
} from './style';
import { Props } from './type';
import { Link } from '../Link';

export const CookiePopup: FunctionComponent<Props> = () => {
    const [displayed, setDisplayed] = useState(
        typeof window === 'undefined'
            ? false
            : !window.localStorage.getItem('cookie-accept'),
    );

    const onAcceptClick = useCallback(() => {
        if (typeof window === 'undefined') {
            return;
        }

        window.localStorage.setItem('cookie-accept', '1');
        setDisplayed(false);
    }, []);

    return (
        <CookiePopupContainer displayed={displayed}>
            <Picture>
                <Copyright>
                    Photo by
                    <br />
                    <Link to="https://unsplash.com/@creativegangsters">
                        Allie Smith
                    </Link>
                </Copyright>
            </Picture>
            <Text>
                Cookie party! I use cookies to improve your experience with my
                website.
                <br />
                By further browsing you agree to accept the cookies.
                <br />
                More information <Link to="/cookie-policy">here</Link>.
                <AgreeButton onClick={onAcceptClick}>Accept!</AgreeButton>
            </Text>
        </CookiePopupContainer>
    );
};
