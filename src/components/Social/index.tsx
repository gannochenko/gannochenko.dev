import React from 'react';
import facebookLogo from '../../images/facebook.svg';
import twitterLogo from '../../images/twitter.svg';
import mediumLogo from '../../images/medium.svg';
import linkedinLogo from '../../images/linkedin.svg';
import githubLogo from '../../images/github.svg';
import { Image } from './style';

export const Social = ({
    facebook,
    twitter,
    medium,
    linkedin,
    github,
    src,
}) => {
    let logo = null;
    if (facebook) {
        logo = facebookLogo;
    } else if (twitter) {
        logo = twitterLogo;
    } else if (medium) {
        logo = mediumLogo;
    } else if (linkedin) {
        logo = linkedinLogo;
    } else if (github) {
        logo = githubLogo;
    }

    if (src) {
        return (
            <a href={src} target="_blank" rel="noreferrer noopener">
                <Image src={logo} />
            </a>
        );
    }

    return <Image src={logo} />;
};
