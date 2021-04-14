const express = require('express');
const bodyParser = require('body-parser');
const db_server = require('./models/db_server');
const path = require('path');

const publicPath = path.join(__dirname,'./public');

const app = express();

app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/', async (req,res,next)=>{
  amount = req.body.amount;
  email = req.body.email;
  if(amount<=1)
  {
    return_info = {};
    return_info.error = true;
    return_info.message = "The amount should be greater than 1";
    return res.send(return_info);
  }

  var result = await db_server.save_user_information({"amount":amount,"email":email});
  res.send(result);
});

app.get('/get_total_amount', async (req,res,next)=>{
  var result = await db_server.get_total_amount();
  res.send(result);
})

app.listen('3000',()=>{
  console.log('Server up and running!');
})
