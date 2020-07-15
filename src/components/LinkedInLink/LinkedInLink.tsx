import React, { FunctionComponent } from 'react';
import { Link } from '../Link';
import { links } from '../../lib/links';

export const LinkedInLink: FunctionComponent = ({ children }) => (
    <Link to={links.linkedin}>{children}</Link>
);
