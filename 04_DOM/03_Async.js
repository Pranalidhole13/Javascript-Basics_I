//1.setTimeout ==> It is a Method (call API)
//timeout means takes time to do that work
const sayHi = function(){
    console.log("Heyyyy")
}
// setTimeout(sayHi,5000) //Only give reference becoz it is a handler

//2.==>doing continuosly
const changeText=function(){
    document.querySelector('h1').innerHTML="Have a great Day!"
}
// setTimeout(changeText,2000)
const changeMe=setTimeout(changeText,2000)

document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(changeMe)
    console.log("Stop event")
})

