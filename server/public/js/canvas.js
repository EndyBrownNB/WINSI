let canvas = document.getElementById('cnvs')

let ctx = canvas.getContext('2d')
const x0 = 0;
const y0 = 500;
const x0graf = 20;
const y0graf = 480;
const step = 4.5 //сверить х и у

const scaleX = 50;
const scaleY = 50;

ctx.lineWidth = 0.2;

var arrX = [0,50,100,150,200,250,300,350,400,450];
var arrY = [y0-500];


function scales(){
    ctx.lineWidth = 0.2;
    ctx.strokeStyle = 'rgb(255, 255, 255)'
    for(let i=20; i<=canvas.clientWidth;i=i+scaleX){
        ctx.moveTo(i,0)
        ctx.lineTo(i,canvas.clientHeight-20)
    }
    ctx.stroke()
    for(let i=480; i>=20;i=i-scaleY){
        ctx.moveTo(20,i)
        ctx.lineTo(canvas.clientWidth,i)
    }
    ctx.stroke()

}
scales()

startweb()
setInterval(()=>{pusharr();
    console.log('Push')
},1000)
setInterval(nexPoint,1000,arrX,arrY)


// Graphic Line
function startweb(){

    scales()

    ctx.fillStyle ='black';
    ctx.lineWidth = 0.2;
    ctx.beginPath();
    ctx.moveTo(20,0);
    ctx.lineTo(20,480);
    ctx.lineTo(500,480);
    ctx.stroke();

// Division left scale, labels on Oy
    for(let i=0; i<6;i++){
        var txt = (5-i) * 20
        var iy = txt
        ctx.fillText(txt +'', 5, iy*step);
        console.log(`txt: ${txt*step}`)
        ctx.beginPath();
        ctx.moveTo(15, i * 60 + 80);
        ctx.lineTo(25, i * 60 + 80);
        ctx.stroke();
    }
}


// Labels on Ox
let labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']

for(let j=0;j<5;j++){
    ctx.fillText(labels[j], 25 + j*100, 490);
}

//массив, который меняется каждые 2 секунды.

function pusharr(){
    let aY = Math.floor(Math.random()*100*4.5)
    if(arrY.length<10){
        arrY.push(aY)
    }else {
        arrY.shift()
        arrY.push(aY)
    }
    console.log(`X: ${arrX}\nY: ${arrY}`)
}


function nexPoint(nx,ny){//исполняется каждые 2 секунды
    //получить координаты  предыдущей точек из массива предыдущих 10 точек
    ctx.clearRect(0, 0, canvas.width, canvas.width);
    startweb()
    ctx.fillStyle = 'rgba(0, 120, 120, 0.9)';
    for (let i=0;i<ny.length;i++){
        if(i==0){
            rp(nx[i],ny[i])
            ctx.font = '10px Arial'
            ctx.fillText(`${ny[i]}`,nx[i],y0graf-ny[i]-10)
        }
        else if(i>0){
            lp(nx[i-1],ny[i-1],nx[i],ny[i])
            rp(nx[i],ny[i])
            ctx.fillText(`${ny[i]}`,nx[i],y0graf-ny[i]-10)
        }
    }
    ctx.fillStyle = 'rgba(0, 80, 150, 0.5)'
     ctx.beginPath()
     ctx.moveTo(x0graf+nx[0],y0graf-ny[0]);
     console.log(ny[ny.length-1])
     ctx.fillRect(x0graf,y0graf,500,-ny[ny.length-1]);
    // if(ny.length==10){

    // ctx.lineTo(x0graf+500,y0graf);
    // ctx.closePath();
    // ctx.fill();
    // }
    

    //     если предыдущей точки нет, то задать х0 у0
    // moveTo (предыдущая точка)
    //     Получить координаты новой точки, 
    //     убрать последнее значение из конца массива точек
    //     добавить новое значение в начале.
    // lineTo (новая точка)
}


//nexPoint(arrX,arrY)



function rp(x,y){ //тут круг
    ctx.beginPath(); 
    ctx.arc(x0graf+x,y0graf-y,5,0,Math.PI*2,true);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}
function lp(x1,y1,x2,y2){ // тут линия
    ctx.beginPath();
    ctx.moveTo(x0graf+x1,y0graf-y1);
    ctx.lineTo(x0graf+x2,y0graf-y2) // на 1.2 по x и на 1 по y
    ctx.stroke();
    //ctx.closePath();
    ctx.fill();
}


// lp(300,350,400,150)
 //rp(400,150)


