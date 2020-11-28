import React, { FunctionComponent } from 'react';
import { Avatar } from '../Avatar';
import {
    AboutAuthorBackground,
    AboutAuthorRoot,
    AboutAuthorRootLeft,
    AboutAuthorHelloRight,
    AboutAuthorNameBlock,
    AboutAuthorGreetingBlock,
} from './style';
import { authorName, AuthorIntro } from '../../lib/author';
import { Container } from '../Container';

export const AboutAuthor: FunctionComponent = () => {
    return (
        <AboutAuthorBackground>
            <Container>
                <AboutAuthorRoot>
                    <AboutAuthorRootLeft>
                        <Avatar />
                    </AboutAuthorRootLeft>
                    <AboutAuthorHelloRight>
                        <AboutAuthorNameBlock>
                            {authorName}
                        </AboutAuthorNameBlock>
                        <AboutAuthorGreetingBlock>
                            <AuthorIntro />
                        </AboutAuthorGreetingBlock>
                    </AboutAuthorHelloRight>
                </AboutAuthorRoot>
            </Container>
        </AboutAuthorBackground>
    );
};
