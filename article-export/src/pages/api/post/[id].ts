import * as path from 'path';
import * as fs from 'fs';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);

export default async (req: any, res: any) => {
    const id = req.query.id;
    const safeId = id.replace(/[^a-z0-9_-]/gi, '');

    const folder = path.normalize(
        path.join(process.cwd(), '../content/blog/', safeId),
    );

    let data: any = {};
    try {
        fs.lstatSync(folder);

        const content = (
            await readFile(path.join(folder, 'content.mdx'))
        ).toString('utf8');
        const searchResult = content.match(/path: \/blog\/(.+)/gm);

        if (!searchResult) {
            throw new Error('Fuck. Fuck off');
        }

        const slug = searchResult[0].replace('path: /blog/', '');
        console.log(slug);
    } catch (e) {
        return res.status(500).json({});
    }

    return res.status(200).json({
        data,
    });
};
