import * as path from 'path';
import * as fs from 'fs';
import { promisify } from 'util';

const readdir = promisify(fs.readdir);

export default async (req: any, res: any) => {
    const folder = path.normalize(path.join(process.cwd(), '../content/blog/'));
    const entries = (await readdir(folder)).filter(entry =>
        fs.lstatSync(path.join(folder, entry)).isDirectory(),
    );

    res.status(200).json({
        data: entries,
    });
};
