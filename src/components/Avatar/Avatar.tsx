import React, { FunctionComponent } from 'react';
import { Container, Image } from './style';
import { Query } from './query';

import { Props } from './props';

export const Avatar: FunctionComponent<Props> = props => {
    const { size = '12rem', borderSize = '0.2rem' } = props;

    console.log(props.title);

    return (
        <Query>
            {data => (
                <>
                    <Container size={size} borderSize={borderSize}>
                        <Image sizes={data.avatar.childImageSharp.fluid} />
                    </Container>
                    T: {props.title}
                </>
            )}
        </Query>
    );
};
