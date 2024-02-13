
// Phase of an event
// Bubbling event

document.querySelector('.child').addEventListener("click",(e)=>{
    e.stopPropagation()   //To stop activate parent and grandparent event
   alert("Child was clicked")
})

document.querySelector('.childcontainer').addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("Childcontainer was clicked")
 })

 document.querySelector('.container').addEventListener("click",()=>{
    alert("Container was clicked")
 })

 let time=setTimeout(()=>{
    document.querySelector('.child').innerHTML="child was changed"
 },1000)
 
 clearTimeout(time)