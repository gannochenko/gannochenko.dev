import React, { FunctionComponent } from 'react';

import { ProjectCard } from '../ProjectCard';
import { ProjectListRoot, Items, Item, LinkContainer } from './style';
import { Props } from './type';
import { Link } from '../Link';

export const ProjectList: FunctionComponent<Props> = ({ data, showLink }) => {
    return (
        <ProjectListRoot>
            <Items>
                {data.map(item => (
                    <Item key={item.node.id}>
                        <ProjectCard data={item.node} />
                    </Item>
                ))}
            </Items>
            {!!showLink && (
                <LinkContainer>
                    <Link to="/projects">See all projects &rarr;</Link>
                </LinkContainer>
            )}
        </ProjectListRoot>
    );
};
