console.log("This is a promises")

let prom1=new Promise((resolve,reject)=>{
    let a=Math.random()
    if(a<0.5){
        reject("Random number was not supporting to You")
    }
    else{
        setTimeout(()=>{
            console.log("Yes i am done")
            resolve("Eureka")
        },1000)
    }
})

prom1.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})