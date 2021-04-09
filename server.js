const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/',(req,res,next)=>{
  amount = req.body.amount;
  email = req.body.email;
  res.send({"amount":amount,"email":email,"message":"Success!"});
});

app.listen('3000',()=>{
  console.log('Server up and running!');
})
