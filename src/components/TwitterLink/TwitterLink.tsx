import React, { FunctionComponent } from 'react';
import { Link } from '../Link';
import { links } from '../../lib/links';

export const TwitterLink: FunctionComponent = ({ children }) => (
    <Link to={links.twitter}>{children}</Link>
);
