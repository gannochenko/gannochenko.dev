import React, { FunctionComponent } from 'react';
import { Query } from './query';
import { Props } from './type';
import { HeaderMain } from './components/HeaderMain';
import { makeTheme } from '../../lib/make-theme';
import { breakpointUp } from '../../lib/media';

const theme = makeTheme({});

console.log(breakpointUp(theme, 'xs'));

export const Header: FunctionComponent<Props> = ({ short }) => {
    return (
        <Query>
            {data => (
                <HeaderMain
                    backgroundImage={data.backgroundImage}
                    inner={short}
                />
            )}
        </Query>
    );
};

export default Header;
