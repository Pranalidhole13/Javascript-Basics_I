if(2 ==="2"){
    console.log("equal");
}
else{
   console.log("Not equal")
}


const temp=200;
if(temp>500){
    console.log("Temperature is greater than 500")
}
else{
    console.log("temperature is not greater than 500")
}

//Implicit
const balance=1000
if(balance>500) console.log("Test")



//Nullish coalescing operator
let a=5 ?? 10
let b=null?? 10
let c=undefined ?? 10
let d=null ?? 10 ??45

console.log(a)
console.log(b)
console.log(c)
console.log(d)

//Ternary operator
// condition ? true: false
const iceCream=100 ;
(iceCream<200) ? console.log("Great take it") : console.log("Never")
