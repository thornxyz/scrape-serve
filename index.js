import puppeteer from "puppeteer";
import fs from "fs/promises";

const getQuotes = async () => {
    const url = process.env.SCRAPE_URL;

    if (!url) {
        console.error("Error: SCRAPE_URL environment variable is not set.");
        process.exit(1);
    }

    const browser = await puppeteer.launch({
        headless: "new",
        executablePath: "/usr/bin/chromium-browser",
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox"
        ]
    });

    const page = await browser.newPage();

    await page.goto(process.env.SCRAPE_URL, {
        waitUntil: "domcontentloaded",
    });

    const quotes = await page.evaluate(() => {
        const quoteList = document.querySelectorAll(".quote");

        return Array.from(quoteList).map((quote) => {
            const text = quote.querySelector(".text").innerText;
            const author = quote.querySelector(".author").innerText;
            return { text, author };
        });
    });

    await fs.writeFile("/app/output.json", JSON.stringify(quotes, null, 2));

    await browser.close();
};

getQuotes();
