const si = require('systeminformation');

//сюда засунуть функцию для поиска данных о процессе по имени процесса.

async function findProcces(procName){
    await si.processes()
    .then(data => {
        console.log(`cpuu: ${data.list['178'].cpuu}`)

        //   for(let i=0;i<data.list.length;i++){
        //      if(data.list[`${i}`].name == procName){//'chrome.exe'
        //         console.log(`${i}`)
        //         console.log(`pid: ${data.list[i].pid}`)
        //         console.log(`cpuu: ${data.list[i].cpuu}`)
        //         }
        //     }
        })
}

//setInterval(findProcces, 2000, 'chrome.exe')
    

async function order(){
    // await si.cpu(function(cpuInfo){
    //     console.log(`cpuInfo.physicalCores: ${cpuInfo.physicalCores}`)
    //     //setTimeout(order,1000)
    // })

    // await si.cpu()
    // .then(data => console.log(`DATA: ${Object.keys(data)}`))
    // .catch(error => console.error(`${error}`));

    await si.processes()
        .then(data => {
            //console.log(Object.keys(data.list[`230`]))
              //for(let i=0;i<data.list.length;i++)
                //if(data.list[`${i}`].name == 'chrome.exe'){
                    //console.log(`cpuu: ${data.list['230'].cpuu}`)
                    // console.log(`cpu: ${data.list['230'].cpu}`)
                    // console.log(`cpus: ${data.list['230'].cpus}`)
                    // console.log(`nice: ${data.list['230'].nice}`)
                    // console.log(`mem: ${data.list['230'].mem}`)
                    // console.log(`memVsz: ${data.list['230'].memVsz}`)
                    // console.log(`user: ${data.list['230'].user}`)
                    // console.log(`path: ${data.list['230'].path}`)
                    // console.log(`parentPid: ${data.list['230'].parentPid}`)
                //}
                
                
        })
        //.then(data => console.log(`TIME: ${data.avgLoad}`))
        .catch(error => console.error(`${error}`));
        
}

//module.exports = order;
async function oke(){
await si.processes()
    .then(data => {
        res =  {
            cpuu:data.list['178'].cpuu,
        }   
        return res
    })
}

oke().then(val => {console.log(val)})

const processCpuu = si.processes()
    .then(data => {
        res =  {
            cpuu:data.list['178'].cpuu,
        }   
        return res
    })

// function interval (){
//     return processCpuu.then(val => {return val.cpuu})
// }

function interval (){
    return processCpuu.then(val => {console.log(val.cpuu)})
}

// setInterval(interval,1000);

//module.exports = interval;

//interval().then(data => console.log(data))
//setInterval(interval,3000);


