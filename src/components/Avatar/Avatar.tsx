import React, { FunctionComponent } from 'react';
import { Container, Image } from './style';
import { Query } from './query';

import { Props } from './props';

export const Avatar: FunctionComponent<Props> = () => {
    return (
        <Query>
            {data => (
                <Container>
                    <Image sizes={data.avatar.childImageSharp.fluid} />
                </Container>
            )}
        </Query>
    );
};
