const express = require("express");

const app = express();

app.use(express.json());


app.get("/", (req,res)=>{
    res.send("Mega SicBo Backend Running");
});


const PORT = process.env.PORT || 5000;


app.listen(PORT, "0.0.0.0", ()=>{
    console.log(`Server running on ${PORT}`);
});
