const si = require('systeminformation');

//сюда засунуть функцию для поиска данных о процессе по имени процесса.

async function findProcces(procName){
    let res;
    await si.processes()
    .then(data => {
          for(let i=0;i<data.list.length;i++){
             if(data.list[`${i}`].name == procName){
                 return res = {
                //     name: data.list[i].name,
                     cpus: data.list[i].pcpus,
                     cpu: data.list[i].pcpu,
                     cpuu: data.list[i].pcpuu,
                     pmem: data.list[i].pmem
                 }
                //console.log(`${i}`)
                //console.log(`${Object.keys(data.list[i])}`)
                //console.log(`pid: ${data.list[i].pid}`)
                //console.log(`pcpu: ${data.list[i].pcpu}`)
                //console.log(`pcpuu: ${data.list[i].pcpuu}`)
                //console.log(`pcpus: ${data.list[i].pcpus}`)
                //console.log(`pmem: ${data.list[i].pmem}`)
                //console.log(`mem_vsz: ${data.list[i].mem_vsz}`)
                //console.log(`mem_rss: ${data.list[i].mem_rss}`)
                //console.log(`pid: ${data.list[i].parentPid}`)
                }
            }
        })
        return res
}

//findProcces('Heroes3 HD.exe')

function interval2 (){
    return findProcces('Heroes3 HD.exe').then((res) => {console.log(`_____\nCPUU: ${res.cpuu}\nCPUS: ${res.cpus}\nCPU: ${res.cpu}\nMEM: ${res.pmem}`)})
}

setInterval(interval2,2000)

//module.exports = oke;


async function order(){
    await si.processes()
    .then(data => {
        console.log(`order: ${data.list[`230`].name}`)
        return data.list[`230`].name
                
        })
        .catch(error => console.error(`${error}`));
        
}

async function oke(){
    let res;
    await si.processes()
        .then(data => {
            res =  {
                cpuu:data.list['247'].cpuu,
                name:data.list['247'].name
            }   
            return res
    })
    .catch(error => console.error(`${error}`));
    return res
}

// const processCpuu = si.processes()
//     .then(data => {
//         res =  {
//             cpuu:data.list['178'].cpuu,
//         }   
//         return res
//     })


function interval (){
    return processCpuu.then(val => {console.log(val.cpuu)})
}




