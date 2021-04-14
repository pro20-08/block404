const mysql = require('mysql');

const db_info = {
  host: 'localhost',
  user: 'root',
  password: 'root@404',
  database: 'lottery'
}

var db_connection;

function handDisconnect(){
  db_connection = mysql.createConnection(db_info);
  db_connection.connect(function(err){
    if(err){
      console.log('Error during connecting DB');
      setTimeout(handDisconnect,2000);
    }
  });
  db_connection.on('error',(err)=>{
    if(err.code === 'PROTOCOL_CONNECTION_LOST' ){
      handDisconnect();
    }
    else{
      throw err;
    }
  });
}

handDisconnect();

module.exports = db_connection;
