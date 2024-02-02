// Line below is used to print on console window
console.log("Hiii Duniya walo!!");
  
// variable
// prefer not to use var becoz of issue in block and functional scope
let firstName="babbar";
console.log(firstName);


// constant
const a=10;
// a=15;
console.log(a);

// Dynamic Typing

let name="Pranali"
console.log(name);

name=21;
console.log(name);


// Ternary operator
let age=19;
let status=(age>=18)? "Yes vote " : "No vote";
console.log(status);


// If else statement
let marks=88;
if(marks>=90){
    console.log("A");
}
else if(marks>=80){
    console.log("B");
}
else if(marks>=70){
    console.log("C");
}
else{
    console.log("D")
}


// Switch Statement
let num=4;
switch(num){
    case 1:console.log("Good");
    break;
    case 2:console.log("Better");
    break;
    case 3:console.log("Best");
    break;
    default:console.log("Better Luck Next Time");
}

// Loops
// For Loop
for(let i=1;i<=10;i++){
    console.log(i);
}

// While Loop
let j=1;
while(j<10){
    console.log(j);
    j++;
}

// Do-While Loop
let k=11;
do{
    console.log(k);
    k++;
}while(k<20);
