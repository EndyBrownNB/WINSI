const express = require('express');
const { response } = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// var a = 0
// var b = 0

// function ab(){
//     a = 4
//     b = 3
// }
// ab()
// console.log(`a:${a} b:${b}`)
var num = 0
function randomNum(){
    //const num = Math.floor(Math.random()*max)
    num = num+1
    console.log(num)
    setTimeout(randomNum, 1000)
}

//setTimeout(randomNum, 1000)
randomNum();
// console.log(num)

const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3080
const host = '192.168.1.83'

app.get('/test', async (req,res) => {
    const response = num;
    console.log(`response: ${response}`)
    res.json({
        models: response
    })
});


app.listen(port, host, () =>{
    console.log(`Example app listening at http://${host}:${port}`)
})