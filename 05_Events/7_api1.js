
async function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Started")
            resolve(455)
        },2000)
    })

    let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

      let data = await x.json()
      return data;
}

async function main(){
console.log("Loading Modules")
console.log("Do Something else")
console.log("Loading data")
let data= await getData();
console.log("processing data")
}

main()