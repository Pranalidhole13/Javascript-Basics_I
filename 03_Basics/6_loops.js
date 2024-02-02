//for of 

// [" '' "]  array 
//[{} {} {} {}]  objects in array

// const num = [1,2,3,4,5]
// for(let i=0;i<num.length;i++){
//     console.log(num[i]);
// }

// for(const val of num){
//     console.log(val)
// }

// const greeting ="Hello world"
// for(const greet of greeting){
//     console.log(greet)
// }

/***********************  Maps   ******************************/
const map = new Map();
map.set('IN' ,'India')
map.set('USA' ,'United State of America')
map.set('Fr', 'France')

// console.log(map)
// for(const key of map){  //It will giving both key and value
//     console.log(key)
// }


// for (const [key,value] of map) {
//     console.log(key,value)
// }


/**************  For in   ****************/

const myObj = {
    js : 'JavScript',
    cpp : 'C++',
    rb : 'Ruby'
};
for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`)
}

const arr=["js" ,"cpp"]
for (const key in arr) {
    console.log(key)
}
for (const key in arr) {
    console.log(arr[key])
}
