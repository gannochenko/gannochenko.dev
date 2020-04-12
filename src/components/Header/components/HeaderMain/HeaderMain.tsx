import React, { FunctionComponent } from 'react';

import { Props } from './type';
import animateScrollTo from 'animated-scroll-to';
import {
    Arrow,
    BackgroundImage,
    HeaderMainContainer,
    Data,
    DataColumn,
    GreetingBlock,
    HelloBlock,
    HelloLeft,
    HelloRight,
    ImageOverlay,
    NameBlock,
    SocialBar,
    MenuOffset,
} from './style';
import { Avatar } from '../../../Avatar';
import { Social } from '../../../Social';
import { Copyright } from '../../../Copyright';
import { links } from '../../../../lib/links';
import { Menu } from '../../../Menu';

export const HeaderMain: FunctionComponent<Props> = ({
    backgroundImage,
    inner,
}) => {
    const scrollWindow = () => {
        const data = document.querySelector('.intro-data');
        if (data) {
            const windowScrollTop = window.scrollY || window.pageYOffset;
            const dataRect = data.getBoundingClientRect();
            animateScrollTo(dataRect.top + dataRect.height + windowScrollTop, {
                speed: 1000,
            });
        }
    };

    const timeoutBase = 500;
    const timeoutRight = timeoutBase + 200;
    const timeoutArrow = timeoutRight + 1000;

    return (
        <>
            <HeaderMainContainer>
                {!inner && (
                    <>
                        <BackgroundImage
                            sizes={backgroundImage.childImageSharp.fluid}
                        />
                        <ImageOverlay />
                        <Data className="intro-data">
                            <DataColumn>
                                <HelloBlock>
                                    <HelloLeft
                                        effectName="fade-enter"
                                        effectTimeout={timeoutBase}
                                        effectEaseA="preset:bounce"
                                    >
                                        <Avatar />
                                    </HelloLeft>
                                    <HelloRight>
                                        <NameBlock
                                            effectName="fade-slide-bottom"
                                            effectTimeout={timeoutRight}
                                            effectEaseA="preset:bounce"
                                        >
                                            Sergei Gannochenko
                                        </NameBlock>
                                        <GreetingBlock
                                            effectName="fade-slide-bottom"
                                            effectTimeout={timeoutRight + 300}
                                            effectEaseA="preset:bounce"
                                        >
                                            Full-stack software engineer in
                                            Berlin, Germany
                                        </GreetingBlock>
                                        <SocialBar
                                            effectName="fade-slide-bottom"
                                            effectTimeout={timeoutRight + 600}
                                            effectEaseA="preset:bounce"
                                        >
                                            <Social
                                                type="github"
                                                src={links.github}
                                            />
                                            <Social
                                                type="linkedin"
                                                src={links.linkedin}
                                            />
                                            <Social
                                                type="medium"
                                                src={links.medium}
                                            />
                                            <Social
                                                type="twitter"
                                                src={links.twitter}
                                            />
                                        </SocialBar>
                                    </HelloRight>
                                </HelloBlock>
                            </DataColumn>
                        </Data>
                        <Arrow
                            effectTimeout={timeoutArrow}
                            onClick={() => scrollWindow()}
                        />
                    </>
                )}
                {inner && <MenuOffset />}
                <Menu />
            </HeaderMainContainer>
            {!inner && (
                <Copyright
                    author="Caspar Camille Rubin"
                    source="https://unsplash.com/photos/fPkvU7RDmCo"
                    sourceText="Unsplash"
                />
            )}
        </>
    );
};
