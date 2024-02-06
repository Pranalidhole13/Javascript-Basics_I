
// const sayDate=function(){
//     console.log("heyy",Date.now())
// }
// setInterval(sayDate,1000) ///===>>>>Start interval
// const intervalid=setInterval(sayDate,1000)
// clearInterval(intervalid) ///==>>>>>Stop Interval



const start=function(){
    document.querySelector("#start").addEventListener('click',function (){
        console.log("hey",Date.now());
    })
}
setInterval(start,1000)