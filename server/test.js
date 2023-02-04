const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function randomNum(max){
    const num = Math.floor(Math.random()*max)
    console.log(num)
    setTimeout(randomNum, 2000, num+200)
    //delay(randomNum(num+200), 2000)
}

randomNum(500)