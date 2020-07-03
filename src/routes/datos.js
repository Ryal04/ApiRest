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

router.get('/last', (req,res)=>{
      mysqlConnection.query('SELECT * FROM zeus order by id_zeus desc limit 1', (err,rows,fields) => {
            if(!err){
               res.json(rows);

            }else{

               console.log(err)

            }
      });
})

module.exports = router;
