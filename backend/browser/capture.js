const { chromium } = require("playwright");


async function capture(){

    const browser = await chromium.launch({

        headless:true,

        args:[
            "--no-sandbox",
            "--disable-setuid-sandbox"
        ]

    });


    const page = await browser.newPage();


    await page.goto(
        "https://example.com",
        {
            waitUntil:"networkidle"
        }
    );


    await page.screenshot({
        path:"capture.png"
    });


    await browser.close();


    return "Screenshot captured";

}


module.exports = capture;
