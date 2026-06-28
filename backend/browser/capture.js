const { chromium } = require("playwright");


async function capture(){

    const browser = await chromium.launch({
        headless:true
    });


    const page = await browser.newPage();


    await page.goto("https://example.com");


    await page.screenshot({
        path:"capture.png"
    });


    await browser.close();


    return "Screenshot captured";

}


module.exports = capture;
