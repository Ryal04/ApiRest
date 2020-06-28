const espress = require('express');
const router = espress.Router();
const mysqlConnection = require('../database');

router.get('/', (req,res)=>{
     mysqlConnection.query('SELECT * FROM zeus', (err,rows,fields) => {
           if(!err){
             res.json(rows);

           }else{

             console.log(err)

           }
     });
})

module.exports = router;
