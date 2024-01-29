const score=400
console.log(score)

const balance=new Number(100)
console.log(balance)

console.log(balance.toString())         //make it in string
console.log(balance.toString().length)  //To calculate the length of String
console.log(balance.toFixed(4))         //to add decimal

const otherNumber=123.8966
console.log(otherNumber.toPrecision(2))

const hundred=1000000
console.log(hundred.toLocaleString('en-IN'))


/**********     Math      ***********/
const value=4
console.log(Math.abs(-4))   ///negative values changes into positive values
console.log(Math.round(4.3))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.3))
console.log(Math.min(4,3,5,6,7,1))
console.log(Math.max(4,3,5,6,7,1))
console.log(Math.random())
console.log(Math.random()*10)
