const si = require('systeminformation');

//сюда засунуть функцию для поиска данных о процессе по имени процесса.

async function findProcces(procName){
    let res;
    await si.processes()
    .then(data => {
          for(let i=0;i<data.list.length;i++){
             if(data.list[`${i}`].name == procName){
                 return res = {
                     cpus: data.list[i].pcpus,
                     cpu: data.list[i].pcpu,
                     cpuu: data.list[i].pcpuu,
                     pmem: data.list[i].pmem
                 }

                }
            }
        })
        return res
}


function interval2 (){
    let res;
    return findProcces('Heroes3 HD.exe')
        .then((data) => {return res = {cpus: cpus,
            cpu: data.list[i].pcpu,
            cpuu: data.list[i].pcpuu,
            pmem: data.list[i].pmem
        }})
    return res
    //{console.log(`_____\nCPUU: ${res.cpuu}\nCPUS: ${res.cpus}\nCPU: ${res.cpu}\nMEM: ${res.pmem}`)})
}


module.exports = findProcces;





