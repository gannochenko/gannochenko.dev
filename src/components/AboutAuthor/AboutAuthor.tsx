import React, { FunctionComponent } from 'react';
import { Avatar } from '../Avatar';
import { HR } from '../HR';
import {
    AboutAuthorRoot,
    AboutAuthorAvatarWrapper,
    AboutAuthorRootLeft,
    AboutAuthorHelloRight,
    AboutAuthorNameBlock,
    AboutAuthorGreetingBlock,
} from './style';
import { authorName, AuthorIntro } from '../../lib/author';

export const AboutAuthor: FunctionComponent = () => {
    return (
        <>
            <HR />
            <AboutAuthorRoot>
                <AboutAuthorRootLeft>
                    <AboutAuthorAvatarWrapper>
                        <Avatar />
                    </AboutAuthorAvatarWrapper>
                </AboutAuthorRootLeft>
                <AboutAuthorHelloRight>
                    <AboutAuthorNameBlock>{authorName}</AboutAuthorNameBlock>
                    <AboutAuthorGreetingBlock>
                        <AuthorIntro />
                    </AboutAuthorGreetingBlock>
                </AboutAuthorHelloRight>
            </AboutAuthorRoot>
        </>
    );
};
