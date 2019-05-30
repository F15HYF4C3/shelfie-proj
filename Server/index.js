const axios = require('axios');
const controller = require('./controller');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const { PORT, DATABASE_URI } = process.env;
const app = express();
app.use(cors());
app.use(bodyParser.json());


app.listen(PORT, ()=>{
    console.log(`I think ${PORT} is alive...`)
})

massive(DATABASE_URI).then((dbQuery)=>{
    console.log(`db connected`);
    app.set('db', dbQuery);
// New Inventory Item Creation
    // dbQuery.CREATE_PROD()
    // .then(items =>console.log(items))
    // .catch(err => console.log(err))
    // dbQuery.GET_PNAME()
    // .then(items => console.log(items))
    // .catch(err => console.log(err))
})

app.get("/api/items", controller.getItems);

app.get('/api/pname', (req, res, next)=>{
    const dbQuery = req.app.get('db');
    //can use this function in any other files
    dbQuery.GET_PNAME({id:Number(req.query.id)})
    .then((pname)=>{
    console.log(pname)
    res.send(pname)
    })
})

// app.get('/api/pname', (req, res, next) => {
//     const db = req.app.get('db');
//     db.pruductdb.findOne({id:req.query.id})
//         .then((pname)=>{
//             res.send(pname)
//         })
// })

// app.post('/api/pname', (req, res, next)=>{
//     const dbQuery = req.app.get('db');
//     const {pname, pprice, pimageurl} = req.body;
//     //can use this function in any other files
//     dbQuery.productdb.insert({
//         pname, 
//         pprice, 
//         pimageurl
//     })
//     .then((pname)=>{
//    res.send(pname) 
//     })
// })
// app.delete('/api/pname', (req, res)=>{
//     const dbQuery = req.app.get('db');
//     let id;
//     dbQuery.filter((e, i)=>{
//         e.code === req.params.code && id === i;
//         return id;
//     })
//     dbQuery.splice(id, 1)
//     res.send(dbQuery)
// }) 
 