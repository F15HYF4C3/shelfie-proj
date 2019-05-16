const express = require('express');
const axios = require('axios');
// const controller = require('controller');
const massive = require('massive');
require('dotenv').config();

var app = express();

app.listen(3001, ()=>{
    console.log("I think im alive...")
})

const DATABASE_URL = process.env.DATABASE_URL;
massive(DATABASE_URL).then(db=>{
    app.set('db', db);
})