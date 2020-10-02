import * as path from 'path';
import * as fs from 'fs';
import { promisify } from 'util';
import parser from 'parser-front-matter';
import { ObjectLiteralType } from '../type';
import { PRODUCTION_URL } from './constants';

const readFile = promisify(fs.readFile);
const parserParse = promisify(parser.parse);

export class Post {
    private initialized = false;
    private healthy = true;
    private frontmatter: ObjectLiteralType = {};
    private content = '';

    constructor(private id: string) {}

    public async isPublished() {
        return (await this.getFrontmatter()).published || false;
    }

    public async getTitle() {
        return (await this.getFrontmatter()).title || '';
    }

    public async getDescription() {
        return (await this.getFrontmatter()).description || '';
    }

    public async getKeywords() {
        return (await this.getFrontmatter()).keywords || '';
    }

    public async getPath() {
        return (await this.getFrontmatter()).path || '';
    }

    public async getSlug() {
        return (await this.getPath()).replace(/^\/blog\//, '');
    }

    public async getCoverImage() {
        return (await this.getFrontmatter())?.images[0]?.image || '';
    }

    public async getCoverImageAuthor() {
        return (await this.getFrontmatter())?.images[0]?.author || '';
    }

    public async getCoverImageSourceText() {
        return (await this.getFrontmatter())?.images[0]?.sourceText || '';
    }

    public async getCoverImageSourceUrl() {
        return (await this.getFrontmatter())?.images[0]?.source || '';
    }

    public async getContent() {
        await this.initialize();

        return this.healthy ? this.content : '';
    }

    public async getCleanContent() {
        let content = await this.getContent();

        content = content.replace(/^import {.+} from 'components';\s+$/m, '');
        content = content.replace(/\n<\/?Align>\n/gm, '');

        return content;
    }

    public async replaceImages(images: ObjectLiteralType) {
        let content = await this.getContent();

        Object.keys(images).forEach(alt => {
            const image = images[alt];
            content = content.replace(
                new RegExp(`!\\[${alt}\\]\\(\\S+\\)`, 'm'),
                `![${alt}](${PRODUCTION_URL}${image})`,
            );
        });

        if (images.__COVER__) {
            this.frontmatter.images[0].image = images.__COVER__;
        }

        this.content = content;
    }

    private async getFrontmatter() {
        await this.initialize();

        if (!this.healthy) {
            return {};
        }

        return this.frontmatter;
    }

    private async initialize() {
        if (this.initialized || !this.healthy) {
            return;
        }

        const folder = path.normalize(
            path.join(process.cwd(), '../content/blog/', this.id),
        );

        try {
            fs.lstatSync(folder);

            const content = (
                await readFile(path.join(folder, 'content.mdx'))
            ).toString('utf8');

            const parseResult = await parserParse(content);

            this.frontmatter = parseResult.data;
            this.content = parseResult.content;
        } catch (e) {
            this.healthy = false;
        }

        this.initialized = true;
    }
}
