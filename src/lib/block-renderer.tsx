import React, { ReactNode } from 'react';
// @ts-ignore
import { markdown } from 'markdown';
import { Node } from './type';
import { BlockParser } from './block-parser';

import { Block } from '../components/Block';
import { AccentBlock } from '../components/AccentBlock';

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
                        raw={block.data}
                        html={markdown.toHTML(block.data)}
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
