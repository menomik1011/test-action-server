// require('dotenv').config();
// console.log(process.env.CI);

'use strict'

const express = require('express')

const PORT = 8000;

const app = express()

app.get('/', (req, res)=>{
    res.send('Hellow Dokcer!')
})

app.listen(PORT, ()=>{
    console.log('running on http://localhost:8000');
})