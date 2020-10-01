import puppeteer from 'puppeteer';
import { ObjectLiteralType } from '../type';

const BLOG_URL = 'https://gannochenko.dev/blog';

// https://github.com/puppeteer/puppeteer/blob/v5.3.1/docs/api.md

export const getImages = async (slug: string) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`${BLOG_URL}/${slug}`);

    const images = await page.evaluate(() => {
        const images: ObjectLiteralType = {};

        const elements = document.querySelectorAll('.gatsby-resp-image-image');
        elements.forEach(image => {
            const alt =
                image.getAttribute('alt') || image.getAttribute('title');
            const src = image.getAttribute('src');

            if (alt && src) {
                images[alt] = src;
            }
        });

        return images;
    });

    await browser.close();

    return images;
};
