import React, { FunctionComponent, useState } from 'react';
import {
    Container,
    Links,
    Contacts,
    Path,
    END,
    AT,
    Info,
    NoWrap,
    SlashContainer,
} from './style';
import { Social } from '../Social';
import { links } from '../../lib/links';
import { Slash } from '../Slash';
import { Link } from '../Link';

export const Footer: FunctionComponent<{}> = () => {
    const [showAT, setShowAT] = useState(false);
    const [showFF, setShowFF] = useState(true);
    const [showDEV, setShowDEV] = useState(false);

    return (
        <Container>
            <Contacts>
                <Links>
                    <Social type="github" src={links.github} />
                    <Social type="linkedin" src={links.linkedin} />
                    <Social
                        type="medium"
                        src={links.medium}
                        onMouseOver={() => {
                            setShowAT(true);
                        }}
                        onMouseOut={() => {
                            setShowAT(false);
                        }}
                    />
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
                            setShowFF(true);
                        }}
                        onMouseOut={() => {
                            setShowFF(false);
                        }}
                    />
                </Links>
                <SlashContainer>
                    <Slash />
                </SlashContainer>
                <Path>
                    <AT show={showAT}>@</AT>gannochenko
                    <END show={showDEV || showFF}>
                        {showFF && 'ff'}
                        {showDEV && '_dev'}
                    </END>
                </Path>
            </Contacts>
            <Info>
                <NoWrap>&copy; then &mdash; now</NoWrap>
                <Link to="/cookie-policy" bright>
                    Cookie policy
                </Link>
            </Info>
        </Container>
    );
};
