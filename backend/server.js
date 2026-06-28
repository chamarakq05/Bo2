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



app.get("/test-browser", async(req,res)=>{

    try{

        const browser = await chromium.launch({
            headless:true,
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



const PORT = process.env.PORT || 8080;


app.listen(PORT,"0.0.0.0",()=>{

console.log(
"SERVER STARTED:",
PORT
);

});
