const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.json({
        status:"Mega SicBo System Running"
    });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT,"0.0.0.0",()=>{
    console.log("Server running on port "+PORT);
});
