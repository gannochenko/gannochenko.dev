import puppeteer from 'puppeteer';

const BLOG_URL = 'https://gannochenko.dev/blog';

export const getImages = async (slug: string) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`${BLOG_URL}/${slug}`);
    await page.screenshot({ path: 'example.png' });

    await browser.close();
};
