const db = require('../db.js');

save_user_information = (data) => new Promise((resolve,reject)=>{
  db.query('INSERT INTO lottery_information SET ?',data,function(err,results,fields){
    if(err){
      reject('could not insert into lottery information');
  }
  resolve('Successful');
  })
});

get_total_amount = () => new Promise((resolve,reject)=>{
  db.query('Select sum(amount) from lottery_information',function(err,results,fields){
    if(err){
      reject('No amount was fetched!');
  }
  resolve(results);
  })
})

// module.exports = { save_user_information };
exports.save_user_information = save_user_information;
exports.get_total_amount = get_total_amount;
