const express = require("express");

const app = express();

app.use(express.json());


app.get("/", (req,res)=>{
    res.status(200).json({
        status:"Mega SicBo Backend Running",
        port:process.env.PORT
    });
});


const PORT = process.env.PORT;


app.listen(PORT, "0.0.0.0", ()=>{
    console.log("Listening on PORT:", PORT);
});
