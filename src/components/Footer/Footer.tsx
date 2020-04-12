import React, { FunctionComponent, useState } from 'react';
import {
    Container,
    Links,
    Contacts,
    Path,
    FF,
    AT,
    Info,
    NoWrap,
} from './style';
import { Social } from '../Social';
import { links } from '../../lib/links';
import { Slash } from '../Slash';
import { Link } from '../Link';

export const Footer: FunctionComponent<{}> = () => {
    const [showAT, setShowAT] = useState(false);
    const [showFF, setShowFF] = useState(false);

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
                            setShowFF(true);
                        }}
                        onMouseOut={() => {
                            setShowFF(false);
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
                <Slash />
                <Path>
                    <AT show={showAT}>@</AT>gannochenko<FF show={showFF}>ff</FF>
                </Path>
            </Contacts>
            <Info>
                <NoWrap>&copy; 2017 &mdash; current</NoWrap>
                <Link to="/cookie-policy" bright>
                    Cookie policy
                </Link>
            </Info>
        </Container>
    );
};
