// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Started")
//             resolve(455)
//         },2000)
//     })
// }

async function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Started")
            resolve(455)
        },2000)
    })
}

async function main(){
console.log("Loading Modules")
console.log("Do Something else")
console.log("Loading data")
let data= await getData();
console.log("processing data")
}

main()