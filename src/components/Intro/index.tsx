import React, { FunctionComponent } from 'react';
import animateScrollTo from 'animated-scroll-to';
import {
    Container,
    BackgroundImage,
    ImageOverlay,
    Arrow,
    Data,
    // Title,
    // SubTitle,
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
                                        <Avatar />
                                    </HelloLeft>
                                    <HelloRight>
                                        <NameBlock>
                                            Sergei Gannochenko
                                        </NameBlock>
                                        <GreetingBlock>
                                            JavaScript full-stack software
                                            engineer in Berlin, Germany.
                                        </GreetingBlock>
                                        <SocialBar>
                                            <Social
                                                linkedin
                                                src="https://www.linkedin.com/in/sergey-gannochenko"
                                            />
                                            <Social
                                                twitter
                                                src="https://twitter.com/Gannochenkoff"
                                            />
                                            <Social
                                                medium
                                                src="https://medium.com/@awesome1888"
                                            />
                                            <Social
                                                github
                                                src="https://github.com/awesome1888"
                                            />
                                        </SocialBar>
                                    </HelloRight>
                                </HelloBlock>
                            </DataColumn>
                            {/*<Title*/}
                            {/*    effect="fade-slide-left"*/}
                            {/*    effectTimeout={timeoutBase}*/}
                            {/*>*/}
                            {/*    Gannochenko*/}
                            {/*</Title>*/}
                            {/*<SubTitle*/}
                            {/*    effect="fade-slide-bottom"*/}
                            {/*    effectTimeout={timeoutBase + 500}*/}
                            {/*>*/}
                            {/*    Blog*/}
                            {/*</SubTitle>*/}
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
