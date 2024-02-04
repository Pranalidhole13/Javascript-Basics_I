//primary ==> number bigInt boolean string null undefined symbol 
//1. stored in stack
//2. call by value

let score=15  //number
let scoreNumber=12345678909381284284n //bigInt
let string="abcd" //string
let isLoggiedIn=true //bolean
let status=null   //null
let length;       //undefined
let breadth=Symbol("123")     //symbol
let breadth1=Symbol("123")    //symbol

console.log(breadth==breadth1)


// Reference or Non-primitive
// 1. stored in HTMLTableCaptionElement
// 2. call by reference

let arr=['VBS','abs','xyz']  //Array

const obj={
    length:12,
    area:"Area"
};

// createFun(){
//     console.log("hello world");
// }
