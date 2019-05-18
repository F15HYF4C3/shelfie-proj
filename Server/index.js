const axios = require('axios');
// const controller = require('controller');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log(`I think ${port} is alive...`)
})

massive(process.env.DATABASE_URI).then((prodsdb)=>{
    console.log(`db connected`);
    app.set('db', prodsdb);
})
.catch((err)=>{
    console.log(`${err}`)
})
// 
app.get('/api/pname', (req, res, next)=>{
    const prodsdb = req.app.get('db');
    //can use this function in any other files
    prodsdb.GET_PNAME({id:Number(req.query.id)})
    .then((pname)=>{
    console.log(pname)
    res.send(pname)
    })
})

app.get('/api/pname', (req, res, next) => {
    const db = req.app.get('db');
    db.pruductdb.findOne({id:req.query.id})
        .then((pname)=>{
            res.send(pname)
        })
})

app.post('/api/pname', (req, res, next)=>{
    const prodsdb = req.app.get('db');
    const {pname, pprice, pimageurl} = req.body;
    //can use this function in any other files
    prodsdb.productdb.insert({
        pname, 
        pprice, 
        pimageurl
    })
    .then((pname)=>{
   res.send(pname)
    })
})

 