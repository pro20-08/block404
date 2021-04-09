const express = require('express');
const app = express();

app.post('/',(req,res,next)=>{
  amount = req.body.amount;
  email = req.body.email;
  res.send({"amount":amount,"email":email});
});

app.listen('3000',()=>{
  console.log('Server up and running!');
})
