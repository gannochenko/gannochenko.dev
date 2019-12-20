import React, { FunctionComponent } from 'react';
import { Query } from './query';
import { Props } from './type';
import { HeaderMain } from './components/HeaderMain';
import { HeaderInner } from './components/HeaderInner';

export const Header: FunctionComponent<Props> = ({ short }) => {
    return (
        <Query>
            {data => {
                if (short) {
                    return (
                        <HeaderInner backgroundImage={data.backgroundImage} />
                    );
                }

                return <HeaderMain backgroundImage={data.backgroundImage} />;
            }}
        </Query>
    );
};
