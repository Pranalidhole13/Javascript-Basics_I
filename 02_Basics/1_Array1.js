// const myArr = [1,2,3,4,5,6]
// const myHeros = ['Shaktiman', 'Superman', 'batman']

// const myArr2= new Array(1,2,3,4,5)
// console.log(myArr)
// console.log(myArr2)
// console.log(myHeros)

// //Array Methods
// myArr.push(15)
// myArr.pop(2)
// myArr.unshift()
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))
// console.log(myArr)

//push ==> adding on existing array but 
// concatenation ==> adding on new array

const marvelHeros = ["thor" ,"Ironman" , "Spiderman"]
const dc = ["Superman", "Flash" , "Batman"]

//concatenation
console.log(marvelHeros.concat(dc))

//spread
const all_arr = [...marvelHeros,...dc]
console.log(all_arr)

//flat
const anotherArray = [1,2,3,[4,5,6],[7,8,9]]
const realanotherArray = anotherArray.flat(Infinity)
console.log(realanotherArray)

//convert array
console.log(Array.from("Superman"))

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))


