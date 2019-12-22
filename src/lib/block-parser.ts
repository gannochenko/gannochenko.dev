export class BlockParser {
    public static parse(data: string) {
        const result: string[] = [];

        // let blockFound: RegExpMatchArray | null;
        let exit = 10;
        let processedData = data;
        do {
            // found = processedData.match(/\[BLOCK\s?(\s+[^\/]+\s*)?\][^\[]*\[\/BLOCK\]/);
            const blockFound = processedData.match(
                /\[BLOCK\s?(\s+[^\/]+\s*)?\]/,
            );
            if (blockFound) {
                const index = blockFound.index;
                result.push(processedData.substr(0, index));
                result.push(blockFound[0]);

                processedData = processedData.substr(
                    index! + blockFound[0].length,
                    processedData.length,
                );

                // now find the tail
                processedData = this.findBlockTail(processedData, result);
            } else {
                result.push(processedData);
                processedData = '';
            }
            exit -= 1;
        } while (processedData.length && exit);

        console.log(result);

        return result;
    }

    private static findBlockTail(data: string, result: string[]) {
        const tailIndex = data.indexOf('[/BLOCK]');
        if (tailIndex < 0) {
            result.push(data);
            return '';
        } else {
            result.push(data.substr(0, tailIndex));
            result.push('[/BLOCK]');
            return data.substr(tailIndex + 8, data.length);
        }
    }
}
