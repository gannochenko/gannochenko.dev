import React, { FunctionComponent, useState } from 'react';
import {
    FooterRoot,
    Links,
    FooterContacts,
    Path,
    END,
    AT,
    FooterLinks,
    NoWrap,
    SlashContainer,
    CICDLink,
    AnalyticsLink,
} from './style';
import { Social } from '../Social';
import { links } from '../../lib/links';
import { Slash } from '../Slash';
import { Link } from '../Link';

export const Footer: FunctionComponent = () => {
    const [showAT, setShowAT] = useState(false);
    const [showArch, setShowArch] = useState(false);
    const [showDEV, setShowDEV] = useState(false);

    return (
        <FooterRoot>
            <FooterContacts>
                <Links>
                    <Social type="github" src={links.github} />
                    <Social type="linkedin" src={links.linkedin} />
                    <Social
                        type="twitter"
                        src={links.twitter}
                        onMouseOver={() => {
                            setShowDEV(true);
                        }}
                        onMouseOut={() => {
                            setShowDEV(false);
                        }}
                    />
                    <Social
                        type="instagram"
                        src={links.instagram}
                        onMouseOver={() => {
                            setShowArch(true);
                        }}
                        onMouseOut={() => {
                            setShowArch(false);
                        }}
                    />
                    <Social type="devto" src={links.devto} />
                </Links>
                <SlashContainer>
                    <Slash />
                </SlashContainer>
                <Path>
                    <AT show={showAT}>@</AT>gannochenko
                    <END show={showDEV || showArch}>
                        {showArch && '_arch'}
                        {showDEV && '_dev'}
                    </END>
                </Path>
            </FooterContacts>
            <FooterLinks>
                <NoWrap>
                    &copy; then &mdash; now ({new Date().getFullYear()})
                </NoWrap>
                <Link to="/cookie-policy" bright>
                    Cookie policy
                </Link>
            </FooterLinks>
            <CICDLink
                href="https://vercel.com/gannochenko/gannochenko/deployments"
                rel="noreferrer noopener nofollow"
                target="_blank"
            />
            <AnalyticsLink
                href="https://analytics.google.com/analytics/web/?authuser=1#/report-home/a162152239w227268972p214636537"
                rel="noreferrer noopener nofollow"
                target="_blank"
            />
        </FooterRoot>
    );
};
