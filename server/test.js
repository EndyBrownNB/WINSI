const express = require('express');
const { response } = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function randomNum(max){
    const num = Math.floor(Math.random()*max)
    return num
    //setTimeout(randomNum, 2000, num+100)
}

randomNum(100)

const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3080
const host = '192.168.1.83'

app.get('/test', async (req,res) => {
    const response = await randomNum(100);
    console.log(response.data)
    res.json({
        models: response.data.data
    })
});


app.listen(port, host, () =>{
    console.log(`Example app listening at http://${host}:${port}`)
})