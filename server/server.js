const express = require('express');
const { response } = require("express");
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');
const ejs = require('ejs');
const si = require('systeminformation')
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const findProcces = require('./si');
const { error } = require('console');


const port = 3000;
const host = '192.168.1.83'

async function newInterval(){
  return require('./si')
} 


const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/num', (req, res) => {
  console.log(`REQ: ${req.url} ======`)
  findProcces('Heroes3 HD.exe').then(data => {
      console.log(`DATA: ${data.cpu}`)
      res.json({msg: `CPU: ${data.cpu}`});
  }).catch(error => {
    console.error('There is a problem in res num');
    res.status(500).send({ error:'there is error'});
  });
})



  app.listen(port, host, () =>{
    console.log(`numServer listening at http://${host}:${port}`)
})