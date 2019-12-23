import { ObjectLiteral } from '../type';

interface Block {
    data: string;
    props: ObjectLiteral;
}

type BlockSequence = Block[];

export class BlockParser {
    public static parse(data: string) {
        const result: BlockSequence = [];

        // let blockFound: RegExpMatchArray | null;
        let exit = 10;
        let processedData = data;

        do {
            const blockTagSearchResult = processedData.match(
                /\[BLOCK\s?(\s+[^\/]+\s*)?\]/,
            );
            if (blockTagSearchResult) {
                const index = blockTagSearchResult.index;
                if (index) {
                    result.push(this.makeBlock(processedData.substr(0, index)));
                }
                result.push(this.makeBlock('', blockTagSearchResult[0]));

                processedData = processedData.substr(
                    index! + blockTagSearchResult[0].length,
                    processedData.length,
                );

                // now find the tail
                processedData = this.findBlockTail(processedData, result);
            } else {
                result.push(this.makeBlock(processedData));
                processedData = '';
            }
            exit -= 1;
        } while (processedData.length && exit);

        return result.filter(block => block.data.length);
    }

    private static makeBlock(data: string, tag?: string): Block {
        return {
            data: this.prepareBlockData(data),
            props: this.makeBlockProps(tag),
        };
    }

    private static makeBlockProps(tag?: string) {
        if (tag) {
            tag = tag
                .trim()
                .replace(/^\[BLOCK\s?\]?/, '')
                .replace(/\]$/, '')
                .trim();
            if (tag) {
                return tag
                    .split(' ')
                    .filter(x => !!x.length)
                    .reduce((result: ObjectLiteral, next) => {
                        const pair = next.split('=').map(part => part.trim());
                        result[pair[0]] = pair[1];
                        return result;
                    }, {});
            }
        }
        return {};
    }

    private static findBlockTail(data: string, result: BlockSequence) {
        const tailIndex = data.indexOf('[/BLOCK]');
        if (tailIndex < 0) {
            result.push(this.makeBlock(data));
            return '';
        } else {
            if (result.length) {
                result[result.length - 1].data = this.prepareBlockData(
                    data.substr(0, tailIndex),
                );
            }
            return data.substr(tailIndex + 8, data.length);
        }
    }

    private static prepareBlockData(data: string) {
        return data.replace(/^(\n|\r\n)/, '').replace(/(\n|\r\n)$/, '');
    }
}
