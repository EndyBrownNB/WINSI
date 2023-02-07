const express = require('express');
const { response } = require("express");
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');
const ejs = require('ejs');
const si = require('systeminformation')
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const interval = require('./si');
const { error } = require('console');

const port = 3000;
const host = '192.168.1.83'

var num = interval()//.then(data => {return data})

function randomNum(){
    num = num+1
    console.log(num)
    setTimeout(randomNum, 1000)
}

//randomNum();

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/num', (req, res) => {
    interval().then(data => {
      res.json({msg: data});
  }).catch(error => {
    console.error('There is a problem in res num');
    res.status(500).send({ error:'there is error'});
  });
})

// app.get('/num', (req, res) => {
//     const mes = interval().then(data => {return data})
//     res.json({mes});
//   });

  app.listen(port, host, () =>{
    console.log(`numServer listening at http://${host}:${port}`)
})