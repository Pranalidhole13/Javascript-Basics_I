let a=300
var c=300
if(true){
    let a=10
    const b=20
    var c=30
}
// console.log(a)
 // console.log(b)
// console.log(c)

//nested 
function one(){
   const username="Hitesh"
   function two(){
       const website="Youtube"
       console.log(username)
   }
//    console.log(website)
   two()
}
one()