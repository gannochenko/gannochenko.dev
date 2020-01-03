import React, { ReactNode } from 'react';
// @ts-ignore
// import { markdown } from 'markdown';
import markdown from 'markdown-it';
import { Node } from './type';
import { BlockParser } from './block-parser';

import { widgets } from '../widgets';

export class BlockRenderer {
    public static render(nodes: Node[]) {
        const parser = markdown({
            html: true,
            typographer: true,
        });

        const result: ReactNode[] = [];
        nodes.forEach(node => {
            BlockParser.parse(node.rawMarkdownBody).forEach((block, index) => {
                const Widget = this.getWidget(block.props.widget);
                if (!Widget) {
                    return;
                }

                result.push(
                    <Widget
                        {...block.props}
                        key={`${node.id}_${index}`}
                        raw={block.data}
                        html={parser.render(block.data)}
                    />,
                );
            });
        });

        return result;
    }

    private static getWidget(widgetName: string) {
        if (!widgetName) {
            return widgets.Block;
        }

        if (widgetName in widgets) {
            return widgets[widgetName];
        }

        return null;
    }
}
