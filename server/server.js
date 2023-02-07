const express = require('express');
const { response } = require("express");
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');
const ejs = require('ejs');
const si = require('systeminformation')
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const order = require('./si')

const port = 3000;
const host = '192.168.1.83'

var num = 0
order().then((data)=>console.log(data))
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
    res.json({ msg: num });
  });


  app.listen(port, host, () =>{
    console.log(`numServer listening at http://${host}:${port}`)
})