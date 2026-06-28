const express = require("express");
const cors = require("cors");
const { chromium } = require("playwright");

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req,res)=>{
    res.send("Mega SicBo Backend OK");
});


app.get("/health",(req,res)=>{
    res.json({
        ok:true
    });
});


// PLAYWRIGHT TEST
app.get("/test-browser", async(req,res)=>{

    try{

        const browser = await chromium.launch({
    headless:true,
    executablePath: "/usr/bin/chromium",
    args:[
        "--no-sandbox",
        "--disable-setuid-sandbox"
    ]
});


        const page = await browser.newPage();

        await page.goto("https://google.com");


        await browser.close();


        res.json({
            browser:true,
            message:"Playwright working"
        });


    }catch(e){

        res.status(500).json({
            error:e.message
        });

    }

});



// CAPTURE ROUTE
app.get("/capture", async(req,res)=>{

    try{

        const browser = await chromium.launch({
            headless:true,
            args:[
                "--no-sandbox",
                "--disable-setuid-sandbox"
            ]
        });


        const page = await browser.newPage();


        await page.goto(
          "https://google.com",
          {
            waitUntil:"networkidle"
          }
        );


        const image = await page.screenshot({
            fullPage:true
        });


        await browser.close();


        res.setHeader(
          "Content-Type",
          "image/png"
        );

        res.send(image);


    }catch(e){

        res.status(500).json({
            error:e.message
        });

    }

});



const PORT = process.env.PORT || 8080;


app.listen(PORT,"0.0.0.0",()=>{

console.log(
"SERVER STARTED:",
PORT
);

});
