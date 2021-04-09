const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/',(req,res,next)=>{
  amount = req.body.amount;
  email = req.body.email;
  if(amount<=1)
  {
    return_info = {};
    return_info.error = true;
    return_info.message = "The amount should be greater than 1";
    return res.send(return_info);
  }

  res.send({"amount":amount,"email":email,"message":"Success!"});
});

app.listen('3000',()=>{
  console.log('Server up and running!');
})
