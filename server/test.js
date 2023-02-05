const express = require('express');
const { response } = require("express");
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');
const ejs = require('ejs');
const si = require('systeminformation')
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

var num = 0

function randomNum(){
    num = num+1
    console.log(num)
    setTimeout(randomNum, 1000)
}

//randomNum();

const app = express()
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json())
app.use(cors())
const port = 3080
const host = '192.168.1.83'

// function evrsec(res,response){
// return res.json({
//     models: response
// })
// }

// app.get('/test', async (req,res) => {
//     const response = num;
//     console.log(`response: ${response}`)
//     setTimeout(evrsec, 1000,res,response)
// });

app.get('/data', (req, res) => {
    res.render('example', {
        msg: 'start'
    })
});


app.listen(port, host, () =>{
    console.log(`Example app listening at http://${host}:${port}`)
})