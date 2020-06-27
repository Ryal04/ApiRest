const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    
    host: '213.239.232.149',
    port: '3306',
    user: 'oterotes_sdclass',
    password: 'sB%P_0_nPD5=',
    database: 'oterotes_sdclass',


});

mysqlConnection.connect(function(err){

    if(err){

        console.log(err);
        return;

    }else{
       console.log('Base de datos conectada');
    }
});

module.exports = mysqlConnection;