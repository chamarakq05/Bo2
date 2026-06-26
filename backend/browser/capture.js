const { chromium } = require('playwright');

async function captureGame(){
 const browser = await chromium.launch({headless:true});
 const page = await browser.newPage();

 await page.goto(process.env.SITE_URL || 'https://example.com');

 await page.screenshot({
   path:'game.png'
 });

 await browser.close();
 console.log('Screenshot saved');
}

captureGame();