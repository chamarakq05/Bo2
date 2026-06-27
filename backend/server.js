const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Mega SicBo Backend OK");
});

app.get("/health",(req,res)=>{
    res.json({ok:true});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,"0.0.0.0",()=>{
    console.log("SERVER STARTED:",PORT);
});
