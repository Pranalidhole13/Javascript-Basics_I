function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000)
    
}

//callback hell (Pyramid of DOOM)===>> Nested callbackes staked below one
//  another forming a pyramid structure. 
//This style of programming becomes diffiult to understand and manage
getData(1,()=>{
    getData(2,()=>{
        getData(3)
    })
})