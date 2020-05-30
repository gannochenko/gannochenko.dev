import React, { FunctionComponent } from 'react';

import { BlogPostCard } from '../BlogPostCard';
import { ProjectListRoot, Items, Item, LinkContainer } from './style';
import { Props } from './type';
import { Link } from '../Link';

export const ProjectList: FunctionComponent<Props> = ({ data, showLink }) => {
    return (
        <ProjectListRoot>
            <Items>
                {data.map(item => (
                    <Item key={item.node.id}>
                        <BlogPostCard data={item.node} />
                    </Item>
                ))}
            </Items>
            {!!showLink && (
                <LinkContainer>
                    <Link to="/blog">See all records &rarr;</Link>
                </LinkContainer>
            )}
        </ProjectListRoot>
    );
};
