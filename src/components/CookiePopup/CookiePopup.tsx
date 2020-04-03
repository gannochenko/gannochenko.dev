import React, { FunctionComponent } from 'react';

import { CookiePopupContainer, Picture, Text } from './style';
import { Props } from './type';
import { Link } from '../Link';

export const CookiePopup: FunctionComponent<Props> = () => {
    return (
        <CookiePopupContainer>
            <Picture />
            <Text>
                Cookie party! I use cookies to improve your experience with my
                website.
                <br />
                By further browsing you agree to accept the cookies.
                <br />
                More information <Link to="/cookie-policy">here</Link>.
                <button>Okay!</button>
            </Text>
        </CookiePopupContainer>
    );
};

// https://unsplash.com/@creativegangsters?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
// https://unsplash.com/s/photos/cookies?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
