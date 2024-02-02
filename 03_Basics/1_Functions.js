function fun(){
    console.log("Hello JavaScript User");
}
fun()

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2)
// }
// addTwoNumbers(3,4)

function addTwoNumbers(num1,num2){
    // console.log(num1+num2)
    return num1+num2
}
const result=addTwoNumbers(3,4)
console.log("result", result) //Ans is giving undefined

function loginUserMsg(username){
    if(username==undefined){
        console.log( 'please enter your name');
        return
    }
   return `${username}, just logged in`
}

// const name=loginUserMsg()
console.log(loginUserMsg())

//Function with objects
const Obj={
    username:"Siya",
    price:99

};
function myObejct(anyObject){
     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

myObejct(Obj);



///Function with array

const myArray=[100,200,300,400]

function newArray(anyArray){
    return anyArray;
}
console.log(newArray(myArray))

