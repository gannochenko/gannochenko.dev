import React, { FunctionComponent } from 'react';
import animateScrollTo from 'animated-scroll-to';
import {
    Container,
    BackgroundImage,
    ImageOverlay,
    Arrow,
    Data,
    DataColumn,
    HelloBlock,
    HelloLeft,
    HelloRight,
    NameBlock,
    GreetingBlock,
    SocialBar,
} from './style';
import { Avatar } from '../Avatar';
import { Social } from '../Social';
import { Query } from './query';
import { Copyright } from '../Copyright';

export const Intro: FunctionComponent<{}> = () => {
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

    return (
        <Query>
            {data => (
                <>
                    <Container>
                        <BackgroundImage
                            sizes={data.backgroundImage.childImageSharp.fluid}
                        />
                        <ImageOverlay />
                        <Data className="intro-data">
                            <DataColumn>
                                <HelloBlock>
                                    <HelloLeft>
                                        <Avatar
                                            effect="fade-slide-left"
                                            effectTimeout={timeoutBase}
                                        />
                                    </HelloLeft>
                                    <HelloRight>
                                        <NameBlock>
                                            Sergei Gannochenko
                                        </NameBlock>
                                        <GreetingBlock>
                                            Full-stack software engineer in
                                            Berlin, Germany.
                                        </GreetingBlock>
                                        <SocialBar>
                                            <Social
                                                type="github"
                                                src="https://github.com/awesome1888"
                                            />
                                            <Social
                                                type="linkedin"
                                                src="https://www.linkedin.com/in/sergey-gannochenko"
                                            />
                                            <Social
                                                type="medium"
                                                src="https://medium.com/@awesome1888"
                                            />
                                            <Social
                                                type="twitter"
                                                src="https://twitter.com/Gannochenkoff"
                                            />
                                        </SocialBar>
                                    </HelloRight>
                                </HelloBlock>
                            </DataColumn>
                        </Data>
                        <Arrow
                            effectTimeout={timeoutBase + 1500}
                            onClick={() => scrollWindow()}
                        />
                    </Container>
                    <Copyright
                        author="Caspar Camille Rubin"
                        source="https://unsplash.com/photos/fPkvU7RDmCo"
                        sourceText="Unsplash"
                    />
                </>
            )}
        </Query>
    );
};
