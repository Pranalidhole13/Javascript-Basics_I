//conversion operation

//numeric data
let age = 15;
console.log(typeof age)
console.log(age)

//string
let score = '33abc'
console.log(typeof score)
console.log(score)
let numScore = Number(score)
console.log('type is :', typeof numScore)
console.log(numScore)

//null
let num = null
console.log(typeof num)
console.log(num)
let valueNum = Number(num)
console.log(typeof(valueNum))
console.log(valueNum)

//undefined
let num1 = undefined
console.log(typeof num1)
console.log(num1)
let valueNum1= Number(num1)
console.log(typeof(valueNum1))
console.log(valueNum1)

// 33 ==> 33
// "33abc" ==> NaN ==> Not a Number
// true ==>1  false ==> 0
// "" ==> false