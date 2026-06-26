const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req,res)=>{
  res.json({status:'Mega SicBo System Running'});
});

app.listen(5000,()=>{
  console.log('Backend running on port 5000');
});