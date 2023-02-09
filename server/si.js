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


module.exports = findProcces;





