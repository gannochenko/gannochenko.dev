import React, { ReactNode } from 'react';
import { Node } from './type';
import { BlockParser } from './block-parser';

import { Block } from '../components/Block';
import { AccentBlock } from '../components/AccentBlock';
// import { AccentBlock } from '../components/AccentBlock';

export class BlockRenderer {
    public static render(nodes: Node[]) {
        const result: ReactNode[] = [];
        nodes.forEach(node => {
            BlockParser.parse(node.rawMarkdownBody).forEach((block, index) => {
                const Widget = this.getWidget(block.props.widget);
                result.push(
                    <Widget
                        {...block.props}
                        key={`${node.id}_${index}`}
                        data={block.data}
                    />,
                );
            });
        });

        return result;
    }

    private static getWidget(widgetName: string) {
        if (widgetName === 'AccentBlock') {
            return AccentBlock;
        }
        return Block;
    }
}
